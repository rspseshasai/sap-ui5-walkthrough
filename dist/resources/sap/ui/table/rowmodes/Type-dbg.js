/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/DataType"], function(DataType) {
	"use strict";

	/**
	 * Defines the row mode.
	 *
	 * @enum {string}
	 * @alias sap.ui.table.rowmodes.Type
	 * @since 1.119
	 * @public
	 */
	const Type = {
		/**
		 * Equivalent to the default configuration of {@link sap.ui.table.rowmodes.Fixed}
		 *
		 * @public
		 */
		Fixed: "Fixed",
		/**
		 * Equivalent to the default configuration of {@link sap.ui.table.rowmodes.Auto}
		 *
		 * @public
		 */
		Auto: "Auto",
		/**
		 * Equivalent to the default configuration of {@link sap.ui.table.rowmodes.Interactive}
		 *
		 * @public
		 */
		Interactive: "Interactive"
	};

	DataType.registerEnum("sap.ui.table.rowmodes.Type", Type);

	return Type;
});