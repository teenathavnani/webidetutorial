jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
<<<<<<< HEAD
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
=======
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
		"zemployee/test/integration/NavigationJourneyPhone",
		"zemployee/test/integration/NotFoundJourneyPhone",
		"zemployee/test/integration/BusyJourneyPhone"
>>>>>>> branch 'master' of https://github.com/teenathavnani/webidetutorial.git
	], function () {
		QUnit.start();
	});
});
