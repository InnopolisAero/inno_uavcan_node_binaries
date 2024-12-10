(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{350:function(t,v,e){t.exports=e.p+"assets/img/t-view.ac5bb3ad.png"},382:function(t,v,e){t.exports=e.p+"assets/img/t-view-bottom.bfb5c953.png"},707:function(t,v,e){t.exports=e.p+"assets/img/t-view-top.c971ce79.png"},708:function(t,v,e){t.exports=e.p+"assets/img/r-view-top.06d8a870.jpg"},709:function(t,v,e){t.exports=e.p+"assets/img/r-view-bottom.997cbc66.jpg"},710:function(t,v,e){t.exports=e.p+"assets/img/pinout.17ae0eea.png"},711:function(t,v,e){t.exports=e.p+"assets/img/drw.e4ecbc0f.png"},852:function(t,v,e){"use strict";e.r(v);var _=e(25),r=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_3-urangefinder-hardware"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-urangefinder-hardware"}},[t._v("#")]),t._v(" 3. uRANGEFINDER hardware")]),t._v(" "),v("p",[t._v("This page is about hardware specific details. For general information, refer to the "),v("RouterLink",{attrs:{to:"/guide/rangefinder/"}},[t._v("1. General")]),t._v(" page., for software related details please refer "),v("RouterLink",{attrs:{to:"/guide/rangefinder/cyphal.html"}},[t._v("Cyphal interface")]),t._v(" or "),v("RouterLink",{attrs:{to:"/guide/rangefinder/dronecan.html"}},[t._v("DroneCAN interface")]),t._v(".")],1),t._v(" "),v("p",[t._v("This device is designed to measure distance and publish it via Cyphal/DroneCAN protocols. It can be used to estimate precision landing or object avoidance.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("View")]),t._v(" "),v("th",[t._v("Top")]),t._v(" "),v("th",[t._v("Bottom")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("img",{attrs:{src:e(350),alt:"drawing",width:"256"}})]),t._v(" "),v("td",[v("img",{attrs:{src:e(707),alt:"drawing",height:"256"}})]),t._v(" "),v("td",[v("img",{attrs:{src:e(382),alt:"drawing",height:"256"}})])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("img",{attrs:{src:e(708),alt:"drawing",width:"256"}})]),t._v(" "),v("td",[v("img",{attrs:{src:e(709),alt:"drawing",width:"256"}})])])])]),t._v(" "),v("h3",{attrs:{id:"_3-1-features"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-features"}},[t._v("#")]),t._v(" 3.1 Features")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.st.com/resource/en/datasheet/vl53l1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("VL53L1CBV0FY-1"),v("OutboundLink")],1),t._v(" sensor")]),t._v(" "),v("li",[t._v("Input voltage sensor")]),t._v(" "),v("li",[t._v("CAN connectors: 2 "),v("a",{attrs:{href:"https://raccoonlabdev.github.io/docs/guide/wires/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UCANPHY Micro (JST-GH 4)"),v("OutboundLink")],1),t._v(".")])]),t._v(" "),v("h3",{attrs:{id:"_3-2-wiring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-wiring"}},[t._v("#")]),t._v(" 3.2 Wiring")]),t._v(" "),v("p",[v("strong",[t._v("Connectors")])]),t._v(" "),v("p",[t._v("The node has connectors which are described in the table below.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("N")]),t._v(" "),v("th",[t._v("Connector")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("CAN1, CAN2")]),t._v(" "),v("td",[t._v("Devices that deliver power to the bus are required to provide 4.9–5.5 V on the bus power line, 5.0 V nominal. Devices that are powered from the bus should expect 4.0–5.5 V on the bus power line. The current shall not exceed 1 A per connector.")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("SWD1")]),t._v(" "),v("td",[t._v("STM32 firmware updating using "),v("RouterLink",{attrs:{to:"/guide/programmer_sniffer/programmer.html"}},[t._v("programmer-sniffer")])],1)])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://docs.raccoonlab.co/guide/wires/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),v("OutboundLink")],1),t._v(" you can find manufacturer part number of connectors it self and its mates.")]),t._v(" "),v("p",[v("strong",[t._v("Pin configuration and functions")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Pin N")]),t._v(" "),v("th",[t._v("CAN1, CAN2")]),t._v(" "),v("th",[t._v("Pin N")]),t._v(" "),v("th",[t._v("SWD1")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("5V")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("CAN2_H")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("SWLK")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("CAN2_L")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("SWDIO")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("3.3")])])])]),t._v(" "),v("p",[t._v("Here you can see all connections of MCU.")]),t._v(" "),v("img",{attrs:{src:e(710),alt:"pinout"}}),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("MCU PIN")]),t._v(" "),v("th",[t._v("PIN Numer")]),t._v(" "),v("th",[t._v("NET Name")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("PA7")]),t._v(" "),v("td",[t._v("18")]),t._v(" "),v("td",[t._v("VERSION")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PA14-BOOT0")]),t._v(" "),v("td",[t._v("36")]),t._v(" "),v("td",[t._v("SWLK")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PA13")]),t._v(" "),v("td",[t._v("35")]),t._v(" "),v("td",[t._v("SWDIO")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PB7")]),t._v(" "),v("td",[t._v("46")]),t._v(" "),v("td",[t._v("SDA")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PB6")]),t._v(" "),v("td",[t._v("45")]),t._v(" "),v("td",[t._v("SCL")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PC6")]),t._v(" "),v("td",[t._v("30")]),t._v(" "),v("td",[t._v("PC6")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PC13")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("LED_RED")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PC14-OSC32_IN")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("LED_GREEN")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PC15-OSC32_OUT")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("LED_BLUE")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PC7")]),t._v(" "),v("td",[t._v("31")]),t._v(" "),v("td",[t._v("INT")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PB1")]),t._v(" "),v("td",[t._v("20")]),t._v(" "),v("td",[t._v("FDCAN2_TX")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PB0")]),t._v(" "),v("td",[t._v("19")]),t._v(" "),v("td",[t._v("FDCAN2_RX")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PD1")]),t._v(" "),v("td",[t._v("39")]),t._v(" "),v("td",[t._v("FDCAN1_TX")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PD0")]),t._v(" "),v("td",[t._v("38")]),t._v(" "),v("td",[t._v("FDCAN1_RX")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("PA1")]),t._v(" "),v("td",[t._v("12")]),t._v(" "),v("td",[t._v("ADC_5V")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"_3-3-specifications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-specifications"}},[t._v("#")]),t._v(" 3.3 Specifications")]),t._v(" "),v("p",[v("strong",[t._v("Mechanical")])]),t._v(" "),v("p",[t._v("Mechanical drowing is shown on the picture below.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(711),alt:"drw",title:"drw"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("Width, mm")]),t._v(" "),v("th",[t._v("Length, mm")]),t._v(" "),v("th",[t._v("Height, mm")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Outline")]),t._v(" "),v("td",[t._v("14.5")]),t._v(" "),v("td",[t._v("23.0")]),t._v(" "),v("td",[t._v("7.8")])]),t._v(" "),v("tr",[v("td",[t._v("PCB")]),t._v(" "),v("td",[t._v("14.5")]),t._v(" "),v("td",[t._v("23.0")]),t._v(" "),v("td",[t._v("1.6")])])])]),t._v(" "),v("p",[t._v("Total weight of device is 6.6 g.")]),t._v(" "),v("p",[t._v("You can download 3D model on "),v("a",{attrs:{href:"https://grabcad.com/library/raccoonlab-urangefinder-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GrabCAD"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("strong",[t._v("Housing")])]),t._v(" "),v("p",[t._v("Information about case presented here.")]),t._v(" "),v("p",[v("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Parameter")]),t._v(" "),v("th",[t._v("MIN")]),t._v(" "),v("th",[t._v("MAX")]),t._v(" "),v("th",[t._v("UNIT")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("V (CAN1, CAN2)")]),t._v(" "),v("td",[t._v("4.5")]),t._v(" "),v("td",[t._v("5.5")]),t._v(" "),v("td",[t._v("V")])]),t._v(" "),v("tr",[v("td",[t._v("I max")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A")])]),t._v(" "),v("tr",[v("td",[t._v("Operating temperature")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("p",[t._v("*Noted Voltage should be delivered only with current limitation under 2.5 Amp.")]),t._v(" "),v("p",[v("strong",[t._v("Recommended operating conditions")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Parameter")]),t._v(" "),v("th",[t._v("Value")]),t._v(" "),v("th",[t._v("UNIT")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("V (CAN1, CAN2)")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("V")])]),t._v(" "),v("tr",[v("td",[t._v("I max")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("A")])])])]),t._v(" "),v("p",[v("strong",[t._v("ESD ratings")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Value")]),t._v(" "),v("th",[t._v("UNIT")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Human-body model (HBM)")]),t._v(" "),v("td",[t._v("2000")]),t._v(" "),v("td",[t._v("V")])]),t._v(" "),v("tr",[v("td",[t._v("Charged-device model (CDM)")]),t._v(" "),v("td",[t._v("500")]),t._v(" "),v("td",[t._v("V")])])])]),t._v(" "),v("h4",{attrs:{id:"mtff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mtff"}},[t._v("#")]),t._v(" MTFF")]),t._v(" "),v("h3",{attrs:{id:"integration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),v("p",[v("strong",[t._v("Recommended mechanical mounting")])]),t._v(" "),v("p",[t._v("The most important thing is to prevent any part of the UAV from getting in front of the sensor. And it is important not to forget to remove the protective film from the sensor.")]),t._v(" "),v("p",[v("strong",[t._v("Functional Block Diagram")])]),t._v(" "),v("p",[t._v("Not yet available.")]),t._v(" "),v("p",[v("strong",[t._v("Connection example diagram")])]),t._v(" "),v("h3",{attrs:{id:"_3-5-power-supply-recommendations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-power-supply-recommendations"}},[t._v("#")]),t._v(" 3.5 Power Supply Recommendations")]),t._v(" "),v("p",[t._v("Device is designed to operate from an input voltage supply range between 4.5 V and 5.5 V over CAN2 or CAN3 connector. This input supply must be able to withstand the maximum input current and maintain a stable voltage. The resistance of the input supply rail should be low enough that an input current transient does not cause a high enough drop that can cause a false UVLO fault triggering and system reset. The amount of bulk capacitance is not critical, but a 47-μF or 100-μF electrolytic capacitor is a typical choice.")]),t._v(" "),v("h3",{attrs:{id:"_3-6-revision-history"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-revision-history"}},[t._v("#")]),t._v(" 3.6 Revision history")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("version")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("v3.0.0")]),t._v(" "),v("td",[t._v("Initial version with STM32G0 MCU")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);