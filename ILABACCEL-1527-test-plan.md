# Test Plan: ILABACCEL-1527

## Overview
- Key: `ILABACCEL-1527`
- Summary: Login to Adactin Hotel App - Test Plan
- Total tests: 6

## Included Tests

### 1) `ILABACCEL-1521` — Successful login with valid username and password
- Summary: Successful login with valid username and password
- Steps:
  1. Navigate to https://adactinhotelapp.com/2.
  2. Enter username `AutotestB`.
  3. Enter password `IA4073`.
  4. Click the Login button.
- Expected results:
  - User is redirected to the Search Hotel page dashboard.

### 2) `ILABACCEL-1522` — Login attempt with invalid username
- Summary: Login attempt with invalid username
- Steps:
  1. Navigate to https://adactinhotelapp.com/2.
  2. Enter an invalid username, for example `InvalidUser3`.
  3. Enter password `IA4073`.
  4. Click the Login button.
- Expected results:
  - Error message `Invalid Login details or Your Password might have expired. Click here to reset your password` is displayed.
  - User remains on the login page.

### 3) `ILABACCEL-1523` — Login attempt with invalid password
- Summary: Login attempt with invalid password
- Steps:
  1. Navigate to https://adactinhotelapp.com/
  2. Enter username `AutotestB`.
  3. Enter an invalid password, for example `WrongPass`.
  4. Click the Login button.
- Expected results:
  - Error message `Invalid Login details or Your Password might have expired. Click here to reset your password` is displayed.
  - User remains on the login page.

### 4) `ILABACCEL-1524` — Login attempt with empty username and or password fields
- Summary: Login attempt with empty username and or password fields
- Steps:
  1. Navigate to https://adactinhotelapp.com/
  2. Leave the username and password fields empty.
  3. Click the Login button.
- Expected results:
  - A validation error message is displayed.

### 5) `ILABACCEL-1525` — User lands on correct dashboard after successful login
- Summary: User lands on correct dashboard after successful login
- Steps:
  1. Navigate to https://adactinhotelapp.com/
  2. Enter username `AutotestB`.
  3. Enter password `IA4073`.
  4. Click the Login button.
- Expected results:
  - The URL contains `SearchHotel.php`.
  - The Search Hotel heading is visible.

### 6) `ILABACCEL-1526` — Appropriate error message displayed on failed login
- Summary: Appropriate error message displayed on failed login
- Steps:
  1. Navigate to https://adactinhotelapp.com/
  2. Enter incorrect credentials.
  3. Click the Login button.
- Expected results:
  - An appropriate error message is displayed to the user.

## Notes
- This export was retrieved from the Xray MCP server for test plan `ILABACCEL-1527`.
- Test cases are manual tests with step-based validation.
