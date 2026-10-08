# Zephyr test cycle export

Attempted to fetch cycle `SCRUM-R1` via the configured `zephyr-server2` MCP server.

Status: blocked by authentication.

Evidence:
- `mcp_zephyr-server_get_test_run` for `SCRUM-R1` returned: `401 Unknown token`
- Direct REST validation against the configured Atlassian Zephyr endpoint also returned authentication failures.

No test-case data could be retrieved until the Zephyr token in `.vscode/mcp.json` is refreshed or replaced with a valid token.

Once valid credentials are available, the export should be regenerated here with:
- Test key
- Summary
- Steps
- Expected results
