jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"zemployee/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zemployee/test/integration/pages/App",
	"zemployee/test/integration/pages/Browser",
	"zemployee/test/integration/pages/Master",
	"zemployee/test/integration/pages/Detail",
	"zemployee/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zemployee.view."
	});

	sap.ui.require([
		"zemployee/test/integration/MasterJourney",
		"zemployee/test/integration/NavigationJourney",
		"zemployee/test/integration/NotFoundJourney",
		"zemployee/test/integration/BusyJourney",
		"zemployee/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});