(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{285:function(t,e,r){t.exports=r.p+"assets/img/view.4bf1b7bb.png"},444:function(t,e,r){t.exports=r.p+"assets/img/view_top.718fa2e9.png"},445:function(t,e,r){t.exports=r.p+"assets/img/view_bottom.64fd2490.png"},446:function(t,e,r){t.exports=r.p+"assets/img/schematic.7cf66217.png"},447:function(t,e,r){t.exports=r.p+"assets/img/pinout.1ab73eff.png"},448:function(t,e,r){t.exports=r.p+"assets/img/micro_wire.410be99b.png"},774:function(t,e,r){"use strict";r.r(e);var a=r(25),_=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2-micro-node-hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-micro-node-hardware"}},[t._v("#")]),t._v(" 2. Micro node hardware")]),t._v(" "),e("p",[t._v("Micro node is the smallest CAN-PWM converter designed to control 1 - 2 ESC or servo with an external power.")]),t._v(" "),e("p",[t._v("Micro node may power the servo, but it is not recommended, since, due to the lack of its own DC-DC, the entire load will go to the device that powers the micro node. If you need to power a servo, it is recommended to look at "),e("a",{attrs:{href:"can_pwm_mini_v2"}},[t._v("mini node")]),t._v(".")]),t._v(" "),e("p",[t._v("This page is about hardware specific details. For general information, refer to the "),e("RouterLink",{attrs:{to:"/guide/can_pwm/"}},[t._v("1. General")]),t._v(" page., for software related details please refer "),e("RouterLink",{attrs:{to:"/guide/can_pwm/cyphal.html"}},[t._v("Cyphal interface")]),t._v(" or "),e("RouterLink",{attrs:{to:"/guide/can_pwm/dronecan.html"}},[t._v("DroneCAN interface")]),t._v(".")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("View")]),t._v(" "),e("th",[t._v("Top view")]),t._v(" "),e("th",[t._v("Bot view")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:r(285),alt:"drawing"}})]),t._v(" "),e("td",[e("img",{attrs:{src:r(444),alt:"drawing"}})]),t._v(" "),e("td",[e("img",{attrs:{src:r(445),alt:"drawing"}})])])])]),t._v(" "),e("h3",{attrs:{id:"_2-1-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-features"}},[t._v("#")]),t._v(" 2.1. Features")]),t._v(" "),e("ul",[e("li",[t._v("2 PWM outputs")]),t._v(" "),e("li",[t._v("2 JST SM04B connectors compatible with "),e("a",{attrs:{href:"https://wiki.dronecode.org/workgroup/connectors/start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Autopilot Connector Standard"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("2 ampers thrupass current")]),t._v(" "),e("li",[t._v("Input voltage sensor")]),t._v(" "),e("li",[t._v("Extra small outline")])]),t._v(" "),e("h3",{attrs:{id:"_2-2-wire"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-wire"}},[t._v("#")]),t._v(" 2.2. Wire")]),t._v(" "),e("p",[t._v("Schematic features. Schematic can be provided via issue.")]),t._v(" "),e("p",[e("strong",[t._v("Connectors")])]),t._v(" "),e("p",[t._v("The node has 3 connectors which are described in the table below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Connector")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("CAN1, CAN2")]),t._v(" "),e("td",[t._v("Devices that deliver power to the bus are required to provide 4.5–5.5 V on the bus power line, 5.0 V nominal. Devices that are powered from the bus should expect 4.5–5.5 V on the bus power line. The current shall not exceed 1 A per connector.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("SWD")]),t._v(" "),e("td",[t._v("STM32 firmware updating using "),e("RouterLink",{attrs:{to:"/guide/programmer_sniffer/programmer.html"}},[t._v("programmer-sniffer")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("PWM1, PWM2")]),t._v(" "),e("td",[t._v("Connectors should be used to deliver signal and power (below 1 amp) to payload such as SERVO or ESC (without power delivery)")])])])]),t._v(" "),e("p",[t._v("Here you can find manufacturer part number of connectors it self and its mates.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("MP")]),t._v(" "),e("th",[t._v("Suitable Wire Type")]),t._v(" "),e("th",[t._v("MP")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("CAN1")]),t._v(" "),e("td",[t._v("JST SM04B-GHS-TB(LF)(SN)")]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://raccoonlab.co/tproduct/360882105-148081634341-jst-4-pins-cable",target:"_blank",rel:"noopener noreferrer"}},[t._v("4-pins cable"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Rectangular-Connectors-Housings_JST-Sales-America-GHR-04V-S_C160418.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GHR-04V-S"),e("OutboundLink")],1),t._v(" and pin "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Line-Pressing-Terminals_JST-Sales-America-SSHL-002T-P0-2_C189897.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSHL-002T-P0.2"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("CAN2")]),t._v(" "),e("td",[t._v("JST SM04B-GHS-TB(LF)(SN)")]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://raccoonlab.co/tproduct/360882105-148081634341-jst-4-pins-cable",target:"_blank",rel:"noopener noreferrer"}},[t._v("4-pins cable"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Rectangular-Connectors-Housings_JST-Sales-America-GHR-04V-S_C160418.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GHR-04V-S"),e("OutboundLink")],1),t._v(" and pin "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Line-Pressing-Terminals_JST-Sales-America-SSHL-002T-P0-2_C189897.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSHL-002T-P0.2"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("PWM1")]),t._v(" "),e("td",[t._v("B-2100S03P-A110")]),t._v(" "),e("td",[t._v("Dupont 3-Pin Connector")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("PWM2")]),t._v(" "),e("td",[t._v("B-2100S03P-A110")]),t._v(" "),e("td",[t._v("Dupont 3-Pin Connector")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("SWD")]),t._v(" "),e("td",[t._v("JST SM04B-GHS-TB(LF)(SN)")]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://raccoonlab.co/tproduct/360882105-148081634341-jst-4-pins-cable",target:"_blank",rel:"noopener noreferrer"}},[t._v("4-pins cable"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("JST "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Rectangular-Connectors-Housings_JST-Sales-America-GHR-04V-S_C160418.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GHR-04V-S"),e("OutboundLink")],1),t._v(" and pin "),e("a",{attrs:{href:"https://www.lcsc.com/product-detail/Line-Pressing-Terminals_JST-Sales-America-SSHL-002T-P0-2_C189897.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSHL-002T-P0.2"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[e("strong",[t._v("Pin configuration and functions")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Pin N")]),t._v(" "),e("th",[t._v("CAN1, CAN2")]),t._v(" "),e("th",[t._v("SWD")]),t._v(" "),e("th",[t._v("PWM1, PWM2")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("5V in")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("GND")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("CAN High")]),t._v(" "),e("td",[t._v("SWCLK")]),t._v(" "),e("td",[t._v("5V")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("CAN Low")]),t._v(" "),e("td",[t._v("SWDIO")]),t._v(" "),e("td",[t._v("PWM1, PWM2")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("3.3V")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"_2-3-specifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-specifications"}},[t._v("#")]),t._v(" 2.3. Specifications")]),t._v(" "),e("p",[e("strong",[t._v("Mechanical")])]),t._v(" "),e("p",[t._v("Scheme is shown on the picture below.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(446),alt:"micro_schematic",title:"micro_schematic"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Width, mm")]),t._v(" "),e("th",[t._v("Length, mm")]),t._v(" "),e("th",[t._v("Height, mm")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Outline")]),t._v(" "),e("td",[t._v("13.5")]),t._v(" "),e("td",[t._v("35.9")]),t._v(" "),e("td",[t._v("10.3")])]),t._v(" "),e("tr",[e("td",[t._v("PCB")]),t._v(" "),e("td",[t._v("13.5")]),t._v(" "),e("td",[t._v("27.6")]),t._v(" "),e("td",[t._v("1.6")])])])]),t._v(" "),e("p",[t._v("Total weight of device 3 g (with cable 4.4g)")]),t._v(" "),e("p",[t._v("You can download 3D model on "),e("a",{attrs:{href:"https://grabcad.com/library/cyphal-and-dronecan-can-pwm-node-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GrabCAD"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("MIN")]),t._v(" "),e("th",[t._v("MAX")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("V (CAN1, CAN2)")]),t._v(" "),e("td",[t._v("4.5")]),t._v(" "),e("td",[t._v("5.5")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("I max")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("A")])]),t._v(" "),e("tr",[e("td",[t._v("Operating temperature")]),t._v(" "),e("td",[t._v("-40")]),t._v(" "),e("td",[t._v("+60")]),t._v(" "),e("td",[t._v("C")])])])]),t._v(" "),e("p",[e("strong",[t._v("Recommended operating conditions")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("VALUE")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("V (CAN1, CAN2)")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("Operating temperature")]),t._v(" "),e("td",[t._v("+20")]),t._v(" "),e("td",[t._v("C")])])])]),t._v(" "),e("p",[e("strong",[t._v("ESD ratings")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Human-body model (HBM)")]),t._v(" "),e("td",[t._v("2000")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("Charged-device model (CDM)")]),t._v(" "),e("td",[t._v("500")]),t._v(" "),e("td",[t._v("V")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-4-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-description"}},[t._v("#")]),t._v(" 2.4. Description")]),t._v(" "),e("h4",{attrs:{id:"pinout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),e("p",[t._v("Here you can see all connections of MCU.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(447),alt:"micro_v1_pinout",title:"micro_v1_pinout"}})]),t._v(" "),e("h4",{attrs:{id:"functional-block-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functional-block-diagram"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Functional Block Diagram")])]),t._v(" "),e("h4",{attrs:{id:"connection-example-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-example-diagram"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Connection example diagram")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(448),alt:"micro_wire",title:"micro_wire"}})]),t._v(" "),e("h3",{attrs:{id:"_2-5-power-supply-recommendations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-power-supply-recommendations"}},[t._v("#")]),t._v(" 2.5. Power Supply Recommendations")]),t._v(" "),e("p",[t._v("The uNODE is designed to operate from an input voltage supply range between 4.5 V and 5.5 V. This input supply must be able to withstand the maximum input current and maintain a stable voltage. The resistance of the input supply rail should be low enough that an input current transient does not cause a high enough drop that can cause a false UVLO fault triggering and system reset. The amount of bulk capacitance is not critical, but a 47-μF or 100-μF electrolytic capacitor is a typical choice.")]),t._v(" "),e("h3",{attrs:{id:"_2-6-revision-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-revision-history"}},[t._v("#")]),t._v(" 2.6. Revision history")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Version")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/RaccoonLabHardware/uNODE/tree/v1.2.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.2.2"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("Sep 9, 2022")]),t._v(" "),e("td",[t._v("Fix PWM1 and PWM2 typo, add hardware version on the board.")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/RaccoonLabHardware/uNODE/tree/v1.2.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.2.1"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("Aug 31, 2022")]),t._v(" "),e("td",[e("strong",[t._v("Typo mistake: PWM1 and PWM2 are mixed up, harware version is missing")]),t._v(". Updates: Add RGB led.")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/RaccoonLabHardware/uNODE/tree/v1.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.1"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("Dec 17, 2021")]),t._v(" "),e("td",[t._v("The first release")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);