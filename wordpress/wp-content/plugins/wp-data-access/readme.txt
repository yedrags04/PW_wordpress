=== WP Data Access – App, Table, Form, Chart & Map Builder plugin ===
Contributors: peterschulznl, maxxschulz, kimmyx, freemius
Tags: tables, table builder, form builder, data management, charts
Tested up to: 6.8
Requires PHP: 7.0
Stable tag: 5.5.41
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A data-driven App Builder with an intuitive Table Builder, a customizable Form Builder, and interactive maps and charts — supporting 35 languages

== Description ==
WP Data Access features a powerful, data-driven **App Builder** equipped with an intuitive **Table Builder**, a flexible **Form Builder**, and interactive **Map** and **Chart** components. Apps can run on both the **front-end** and **back-end**, with easy-to-manage authorization based on WordPress users and roles. The App Builder supports **35 languages**, making it easy to localize applications for a global audience.

Designed for advanced users, the **SQL Query Builder** enables you to **schedule SQL queries** to run automatically at defined intervals. Combined with **remote database connectivity**, it allows you to set up **batch jobs** for **automated data exchange** across multiple databases—ideal for syncing and integrating external data sources directly from your WordPress site.

== App Builder ❤️ ==
> A data-driven Rapid Application Development tool featuring **Builders**, **Managers**, and **Wizards** for effortless app creation and **Hooks** for ultimate customization.

* **Table Builder**
  * Many powerful static and dynamic filtering options 🔍
  * Real-time computed fields ➕
  * Live aggregations for instant insights 📈
  * Seamless chart integration 📊
  * JavaScript hooks to customize layout and behavior 🔧
  * A Lookup Wizard to create lookups in a snap 🧙
  * Inline editing for instant updates 📝
  * Export to PDF, CSV, JSON, XML, SQL, and Excel 📄
  * WordPress media library integration 📷🎞
* **Form Builder**
  * Grid-based forms ➕➖
  * Multi-level master-detail relationships 🔄
  * A Lookup Wizard to create lookups in a snap 🧙
  * A Computed Field Wizard to implement custom fields 🧙
  * JavaScript hooks to customize business rules, validations and layout 🔧
  * Interactive client-side validations based on database constraints ✅
  * Access the WordPress media library for enhanced functionality 📷🎞
* **Chart Builder**
  * Google Charts integration 📊
  * Create charts from SQL queries 📑
  * Interactively adjustable charts configuration ✔
  * Print/export charts 🖨📄
* **Map Builder**
  * Google Maps integration 🌎
  * Query-driven location visualizations 📍
  * Interactively adjustable search radius 🔍
  * Customizable marker content and layout 📌
* **Theme Builder**
  * Personalize your app’s appearance with ease 🎨
* **App Manager**
  * Authorization management based on WordPress user and role principles 🔒
  * Make apps available from back-end dashboard menu 🔽
  * Add apps to front-end using shortcodes 🌐
  * Use safe mode to disable hooks temporarily 🔧
* Build dynamic, data-driven apps for both front-end and back-end 📱
* Run apps in 35 languages to reach a global audience 🌍
* Connect to local and remote databases 🗺
* Real-time build and run capabilities 💻

== Data Explorer ==
> Take full control of your data with a **GUI-driven interface** to manage local and remote databases right from your WordPress dashboard.

* Manage local and remote data effortlessly 🗺
* Perform global search and replace across multiple databases and tables 🔍
* [Easily import SQL and CSV files, with ZIP support for handling large datasets](https://wpdataaccess.com/docs/data-explorer-manage/imports-sql-csv/) 📄
* [Export data in various formats, including SQL, CSV, JSON, and XML—even for large tables](https://wpdataaccess.com/docs/data-explorer-actions/actions/) 📄
* Rename, copy, truncate, drop, optimize, or alter tables 👤
* [Advanced table and column options, such as geolocation, inline editing, and enhanced search](https://wpdataaccess.com/docs/data-explorer-settings/table-and-view-settings/) ✔

== SQL Query Builder ==
> **Run and schedule SQL queries** effortlessly from your WordPress dashboard - **powered by tabs and AI**.

* Schedule queries to run automatically at defined intervals 🕝
* AI Assistant to generate queries and fix common errors 🤖
* Tabbed interface for running multiple queries in parallel ▶
* Save and reuse queries - privately or globally 🔄
* Built-in safeguards to protect core WordPress tables and ensure data integrity 🔒
* [Visual Query Builder - create complex queries without writing SQL](https://wpdataaccess.com/docs/sql-query-builder/visual-query-builder/) 🎨

== Premium Data Services ==
> **Connect, sync, and manage remote databases and data files.**

* Compatible with all plugin features ✅
* [Premium Remote Connection Wizard](https://wpdataaccess.com/docs/remote-connection-wizard/remote-wizard/) 🧙
  * Remote Databases: Connect to SQL Server, Oracle, PostgreSQL, MariaDB, MySQL, and MS Access (file-based) 💻
  * Remote Data Files: Sync with CSV, JSON, and XML files for dynamic updates (e.g., Google Sheets sync) 📄

== Legacy Tools ==
> Will be replaced by the **App Builder**.

* Available until at least december 2026 🕝
* Use to maintain old solutions 🙏
* Use App Builder for new projects 🚀

== Dashboards and Widgets ==
> Customizable widgets for dashboards (back-end), webpages (front-end), and external websites. (functionality will be moved to App Builder)

* Centralized data management
* Share data widgets anywhere
* Give specific users and user groups access to locked dashboards
* Support for user-created dashboards

== Useful Links ==
- [Plugin Website](https://wpdataaccess.com/)
- [Documentation](https://wpdataaccess.com/documentation/)

== Installation ==
(1) Upload the WP Data Access plugin to your WordPress site
(2) Activate the plugin
(3) Navigate to the WP Data Access menu

And you're all set! 🚀

== Changelog ==

= 5.5.41 =
* Released 2025-05-22
* Added: New SQL Query Builder
* Added: MySQL date format editing
* Changed: Default table layout to fixed
* Merged: Row actions and row selection columns
* Fixed: Column too wide with inline HTML
* Fixed: Media not displayed for relation table columns
* Fixed: Norwegian date format incorrect
* Fixed: Decreasing screen width does not resize chart width in full screen mode
* Fixed: User denied Geolocation error not handled correctly
* Fixed: Cannot update record after navigating to different row in form
* Fixed: Enum column loses "Show values in setting when moved
* Fixed: Handle basic HTML markup in table cells
* Fixed: Search panes not sorted
* Fixed: Column filter icon shows for detail tables when no filterable columns are visible
* Fixed: Clickable area on column filter does not include caret
* Fixed: Form does not scroll correctly in full-screen mode
* Fixed: Modal form not handling column filters correctly
* Fixed: Code editor height incorrect in full-screen mode
* Fixed: Rename app database not working
* Fixed: Link to show examples in Default Where shows table SQL instead
* Fixed: REST API - Critical Error on wpda/table/select
* Removed: PREVIOUS | NEXT row buttons from form if table has no primary key
* Removed: WP Data Access from detail page footer
* Updated: Freemius SDK

= 5.5.40 =
* Released 2025-04-18
* Added: Previous and next row buttons to data entry form
* Added: Map integration to Table Builder
* Added: View maps and charts besides each other in header or footer dock
* Added: Spy popup to default where clause
* Added: Slovenian language support
* Added: Parameter support to chart apps
* Added: Parameter support to map apps
* Changed: Media parameters to optional
* Changed: Powered by hidden by default (added tooltip to UI)
* Fixed: Map height incorrect when run from shortcode
* Fixed: Column filter default not working with server-side processing
* Fixed: Chart data columns expecting length
* Fixed: Images not shown correctly on Safari (macOS and iOS)
* Fixed: Incorrect table height on Safari (macOS and iOS)
* Fixed: Numeric and null values not handle correctly in CSV + JSON export

= 5.5.37 =
* Released 2025-04-02
* Added: New app type MAP
* Added: Root property control to setColumnStyle
* Added: Type-checking to reducers and actions
* Added: Support for spatial columns in tables and forms
* Added: Support for multiple custom shortcode parameters
* Improved: Replaced textarea with CodeMirror for SQL editing
* Fixed: Vulnerability shortcode parameter filter field
* Fixed: Chart Builder menu uses old format
* Fixed: Add column data type to all requests
* Fixed: Added null values to Query Builder CSV export
* Fixed: Shortcode arguments not processed
* Fixed: Missing table header border

= 5.5.36 =
* Released 2025-03-17
* Added: Form hooks
* Added: Builtins to table and form hooks
* Added: OK and CANCEL buttons to full-screen code editor
* Added: Allow hiding title bar on web page via shortcode parameter
* Added: Table hook postQuery
* Added: Allow empty value selection from drop-down list (client-side processing only)
* Fixed: Table hook onAppOpen not working
* Fixed: Slovak app language falls back to English
* Fixed: Removed unused buttons from actions menu

= < 5.5.36 =
* See changelog.txt in plugin folder