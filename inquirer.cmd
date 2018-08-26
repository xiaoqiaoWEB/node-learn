@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node-learn\inquirer.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node-learn\inquirer.js" %*
)
