jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
<<<<<<< HEAD
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
=======
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
>>>>>>> branch 'master' of https://github.com/teenathavnani/webidetutorial.git
	], function () {
		QUnit.start();
	});
});
