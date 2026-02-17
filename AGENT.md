
# Agent Instructions — digido Methodology

## 🔴 MANDATORY: Read Before ANY Action
1. Read `.gemini/GEMINI.md` for core rules (Planning Lock, State Persistence, Context Hygiene, Empirical Validation)
2. Read `.digido/STATE.md` for current project position
3. Follow ALL 4 rules at ALL times — no exceptions

## Slash Commands
When user types a `/command`, read the matching file from `.agent/workflows/{command}.md` and follow it exactly.

## Key Commands
| Command | Purpose |
|---------|---------|
| `/new-project` | Initialize project spec & roadmap |
| `/plan N` | Plan phase N |
| `/execute N` | Execute phase N |
| `/verify N` | Verify phase N |
| `/pause` | Save state and stop |
| `/resume` | Load state and continue |
| `/progress` | Show project status |
| `/debug` | Structured debugging |
| `/help` | Show all commands |

## Auto-behaviors (always active)
- After EVERY task: update `.digido/STATE.md`
- After significant events: update `.digido/JOURNAL.md`
- After 3 failed debug attempts: STOP → state dump → recommend fresh session
- Never mark done without empirical proof (screenshots, test output, command results)

## Structure
```
.agent/      → shared methodology (DO NOT MODIFY from project)
.gemini/     → shared system prompt (DO NOT MODIFY from project)
.digido/     → LOCAL project state (UPDATE FREQUENTLY)
  templates/ → shared templates (DO NOT MODIFY)
  examples/  → shared examples (DO NOT MODIFY)
  phases/    → local phase data
  STATE.md   → local (created by /new-project)
  JOURNAL.md → local (created by /new-project)
```

## Project-Specific Notes
<!-- Add project-specific agent instructions below this line -->
