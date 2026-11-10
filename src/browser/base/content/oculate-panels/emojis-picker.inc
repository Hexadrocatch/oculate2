# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

<panel type="arrow" orient="vertical" id="PanelUI-oculate-emojis-picker" position="bottomright topright" side="bottom">
  <hbox id="PanelUI-oculate-picker-header">
    <toolbarbutton class="toolbarbutton-1" />
    <hbox id="PanelUI-oculate-emojis-buttons-wrapper">
      <toolbarbutton id="PanelUI-oculate-emojis-picker-change-emojis" class="selected" data-l10n-id="oculate-icons-picker-emoji" />
      <toolbarbutton id="PanelUI-oculate-emojis-picker-change-svg" data-l10n-id="oculate-icons-picker-svg" />
    </hbox>
    <toolbarbutton id="PanelUI-oculate-emojis-picker-none" class="toolbarbutton-1" />
  </hbox>
  <hbox id="PanelUI-oculate-emojis-picker-pages">
    <vbox emojis="true">
      <hbox id="PanelUI-oculate-emojis-picker-header">
        <html:input type="search" id="PanelUI-oculate-emojis-picker-search" data-l10n-id="oculate-emojis-picker-search" />
      </hbox>
      <hbox id="PanelUI-oculate-emojis-picker-list" />
    </vbox>
    <hbox svgs="true" id="PanelUI-oculate-emojis-picker-svgs" />
  </hbox>
</panel>
