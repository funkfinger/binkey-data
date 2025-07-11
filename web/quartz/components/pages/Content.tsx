import { ComponentChildren } from "preact";
import { htmlToJsx } from "../../util/jsx";
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren;
  const classes: string[] = fileData.frontmatter?.cssclasses ?? [];
  const classString = ["popover-hint", ...classes].join(" ");
  return (
    <article class={classString}>
      {" "}
      <blockquote class="callout warning" data-callout="warning">
        <div class="callout-title">
          <div class="callout-icon"></div>
          <div class="callout-title-inner">Important Note</div>
        </div>
        <div class="callout-content">
          <div class="callout-content-inner">
            <p>
              This entire repo was AI created - including all of the data
              within. The intent was to A) help me with my personal electronics
              inventory; and B) see how I could use AI to make that process a
              bit easier. <strong>DO NOT TRUST!</strong>
            </p>
          </div>
        </div>
      </blockquote>
      {content}
    </article>
  );
};

export default (() => Content) satisfies QuartzComponentConstructor;
