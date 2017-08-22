jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one Orders

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
		"zapp/test/integration/MasterJourney",
		"zapp/test/integration/NavigationJourney",
		"zapp/test/integration/NotFoundJourney",
		"zapp/test/integration/BusyJourney",
		"zapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});