/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

add_setup(async function() {
  await PlacesUtils.bookmarks.eraseEverything();

  await PlacesUtils.bookmarks.insertTree({
    guid: PlacesUtils.bookmarks.toolbarGuid,
    children: [
      {
        title: "Example One",
        url: "https://example.com/1/",
      },
      {
        type: PlacesUtils.bookmarks.TYPE_SEPARATOR,
      },
      {
        title: "Example Two",
        url: "https://example.com/2/",
      },
    ],
  });

  registerCleanupFunction(async function() {
    await PlacesUtils.bookmarks.eraseEverything();
  });
});

add_task(async function test_open_all_without_separator() {
  let gLibrary = await promiseLibrary("AllBookmarks");
  gLibrary.PlacesOrganizer.selectLeftPaneBuiltIn("BookmarksToolbar");
  gLibrary.ContentTree.view.selectAll();

  let placesContext = gLibrary.document.getElementById("placesContext");
  let promiseContextMenu = BrowserTestUtils.waitForEvent(
    placesContext,
    "popupshown"
  );
  synthesizeClickOnSelectedTreeCell(gLibrary.ContentTree.view, {
    button: 2,
    type: "contextmenu",
  });
  await promiseContextMenu;

  let openTabs = gLibrary.document.getElementById(
    "placesContext_openBookmarkLinks:tabs"
  );
  let promiseWaitForWindow = BrowserTestUtils.waitForNewWindow();
  placesContext.activateItem(openTabs, { shiftKey: true });
  let newWindow = await promiseWaitForWindow;

  Assert.equal(
    newWindow.browserDOMWindow.tabCount,
    2,
    "Expected number of tabs opened in new window"
  );

  await BrowserTestUtils.closeWindow(newWindow);
  await promiseLibraryClosed(gLibrary);
});
