# AGENTS.md

# Repository Editing Policy

This repository is production code.
Make the smallest possible safe change.

## Encoding (MANDATORY)

* Every source file in this repository uses UTF-8.
* NEVER change the encoding of an existing file.
* NEVER change UTF-8 to ANSI, ASCII, UTF-16 or any other encoding.
* Preserve the existing BOM state.
* Preserve existing line endings (CRLF/LF).
* Never modify Turkish characters:
ğ Ğ ş Ş ı İ ç Ç ö Ö ü Ü

## Line Endings

* Preserve the original line endings of every file.
* Never normalize line endings.
* Never rewrite a file just to change whitespace.

## PowerShell (STRICTLY FORBIDDEN)

Never modify repository files using:

* Set-Content
* Out-File
* Add-Content
* ">"
* ">>"
* PowerShell pipelines that rewrite complete files

Do not rewrite files through PowerShell.

## Editing Method (MANDATORY)



* Always prefer apply\_patch.
* For a new task, always tell the user which files you will touch and get confirmation before proceeding.
* During an active batch of related work, treat follow-up corrections as approved within that batch; tell the user which files are being changed, but do not ask for confirmation again unless the change expands the task scope or requires touching unrelated files.
* Don't take backup yourself.
* Never rewrite an entire file for a small change.
* Edit only the minimum required lines.
* Avoid formatting-only changes.
* Avoid unrelated refactoring.
* Never edit files through shell commands.
* Do not use PowerShell, cmd, bash redirection,
* or scripts to overwrite repository files.
* Always use the native editing tool.

## File Safety

* Touch only files required by the current task.
* Do not rename files unless requested.
* Do not move files unless requested.
* Do not delete files unless requested.

## Before Finishing

Always inspect the result.

Checklist:

* Review git diff.
* Verify UTF-8 is preserved.
* Verify line endings are unchanged.
* Verify Turkish characters remain intact.
* Ensure no unexpected whole-file diff exists.

## Golden Rule

Prefer the smallest safe edit over the fastest edit.

If a task requires editing fewer than 100 lines,

DO NOT rewrite the entire file.

Use apply\_patch or an equivalent minimal edit.

Whole-file rewrites are prohibited unless explicitly requested.

## app.js index

Before inspecting `F:\OYUN_SITESI\func_presenter\app.js`, read `F:\OYUN_SITESI\func_presenter\app-index.md` first.

Keep the `APP-ANCHOR` comments in `app.js` synchronized when major sections are added, removed, or moved.

## func_presenter exercise engines

New exercise types must never be implemented directly in `F:\OYUN_SITESI\func_presenter\app.js`.

Implement each exercise type as a separate file under `F:\OYUN_SITESI\func_presenter\exercise-engines\` and load it from `index.html`.

Keep `app.js` limited to the exercise routing and startup connection for that engine.

For every new exercise, keep its logic in its own engine JS file and its exercise-specific styles in its paired engine CSS file under `exercise-engines\`. `app.js` may contain only routing/startup connections, and `styles.css` may contain only shared core infrastructure; neither may contain exercise-specific implementation or styles.
