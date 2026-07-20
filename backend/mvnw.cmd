@echo off
setlocal

set BASEDIR=%~dp0
set WRAPPER_DIR=%BASEDIR%.mvn\wrapper
set WRAPPER_JAR=%WRAPPER_DIR%\maven-wrapper.jar
set WRAPPER_PROPS=%WRAPPER_DIR%\maven-wrapper.properties
set MAVEN_PROJECTBASEDIR=%BASEDIR:~0,-1%

if not exist "%WRAPPER_JAR%" (
  powershell -NoProfile -ExecutionPolicy Bypass -Command "$props = Get-Content '%WRAPPER_PROPS%'; $url = ($props | Where-Object { $_ -like 'wrapperUrl=*' }) -replace 'wrapperUrl=', ''; New-Item -ItemType Directory -Force -Path '%WRAPPER_DIR%' | Out-Null; Invoke-WebRequest -Uri $url -OutFile '%WRAPPER_JAR%'"
  if errorlevel 1 exit /b 1
)

java "-Dmaven.multiModuleProjectDirectory=%MAVEN_PROJECTBASEDIR%" -classpath "%WRAPPER_JAR%" org.apache.maven.wrapper.MavenWrapperMain %*
