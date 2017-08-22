jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zapp/test/integration/pages/App",
	"zapp/test/integration/pages/Browser",
	"zapp/test/integration/pages/Master",
	"zapp/test/integration/pages/Detail",
	"zapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zapp.view."
	});

	sap.ui.require([
		"zapp/test/integration/NavigationJourneyPhone",
		"zapp/test/integration/NotFoundJourneyPhone",
		"zapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});