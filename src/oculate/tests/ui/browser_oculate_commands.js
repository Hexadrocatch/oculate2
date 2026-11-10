/* Any copyright is dedicated to the Public Domain.
   https://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

ChromeUtils.defineESModuleGetters(this, {
  sinon: "resource://testing-common/Sinon.sys.mjs",
});

let sandbox;

add_setup(function () {
  sandbox = sinon.createSandbox();
  registerCleanupFunction(() => sandbox.restore());
});

function runCommand(id) {
  const command = document.getElementById(id);
  ok(command, `<command id="${id}"> exists`);
  command.doCommand();
}

add_task(function test_table_commands() {
  const forward = sandbox.stub(gOculateWorkspaces, "changeWorkspaceShortcut");
  runCommand("cmd_oculateWorkspaceForward");
  sinon.assert.calledOnce(forward);
  Assert.deepEqual(forward.firstCall.args, [], "Forward takes no argument");

  runCommand("cmd_oculateWorkspaceBackward");
  sinon.assert.calledTwice(forward);
  Assert.deepEqual(forward.secondCall.args, [-1], "Backward passes -1");

  const toggle = sandbox.stub(gOculateCompactModeManager, "toggle");
  runCommand("cmd_oculateCompactModeToggle");
  sinon.assert.calledOnce(toggle);
  Assert.deepEqual(toggle.firstCall.args, [], "Toggle takes no argument");

  const split = sandbox.stub(gOculateViewSplitter, "toggleShortcut");
  runCommand("cmd_oculateSplitViewVertical");
  sinon.assert.calledOnce(split);
  Assert.deepEqual(split.firstCall.args, ["vsep"], "Split passes its kind");

  sandbox.restore();
});

add_task(function test_space_switch_commands() {
  const switchTo = sandbox.stub(gOculateWorkspaces, "shortcutSwitchTo");
  runCommand("cmd_oculateWorkspaceSwitch1");
  runCommand("cmd_oculateWorkspaceSwitch10");
  sinon.assert.calledTwice(switchTo);
  Assert.deepEqual(switchTo.firstCall.args, [0], "Switch 1 is index 0");
  Assert.deepEqual(switchTo.secondCall.args, [9], "Switch 10 is index 9");
  sandbox.restore();
});

add_task(function test_glance_fallback() {
  const glance = sandbox.stub(gOculateGlanceManager, "handleMainCommandSet");
  runCommand("cmd_oculateGlanceExpand");
  sinon.assert.calledOnce(glance);
  is(
    glance.firstCall.args[0]?.target?.id,
    "cmd_oculateGlanceExpand",
    "Glance commands fall through with the command event"
  );
  sandbox.restore();
});
