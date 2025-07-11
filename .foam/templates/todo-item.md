---
type: todo
cabinet: ${1:Cabinet Number}
bin: ${2:Bin Number}
priority: ${3:high|medium|low}
created: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}
tags: [todo, cabinet-${1}, bin-${2}, priority-${3}, ${4:additional-tags}]
---

# TODO: ${5:Brief Description}

## Details

- **Location**: Cabinet-${1:X}, Bin ${2:Y}
- **Priority**: ${3:Priority Level}
- **Created**: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}
- **Due Date**: ${6:YYYY-MM-DD or "None"}

## Action Required

${7:Detailed description of what needs to be done}

## Notes

${8:Additional notes or context}

#todo #cabinet-${1} #bin-${2} #priority-${3}
