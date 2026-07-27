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
* Always tell the user which files you will touch for the current task. First, get his confirmation before proceeding. 
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

