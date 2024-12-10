(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{331:function(t,e,r){t.exports=r.p+"assets/img/view.315bd943.png"},381:function(t,e,r){t.exports=r.p+"assets/img/view-bottom.7fbe95eb.png"},698:function(t,e,r){t.exports=r.p+"assets/img/view-top.fc94ab5d.png"},699:function(t,e,r){t.exports=r.p+"assets/img/r-view-top.2fff72bb.jpg"},700:function(t,e,r){t.exports=r.p+"assets/img/r-view-bottom.e7047f9d.jpg"},701:function(t,e,r){t.exports=r.p+"assets/img/drw.6bb7f4d4.png"},702:function(t,e,r){t.exports=r.p+"assets/img/lw20_i2c.5a22b588.png"},703:function(t,e,r){t.exports=r.p+"assets/img/garmin_lite_v3.0e17fb8d.png"},850:function(t,e,r){"use strict";r.r(e);var v=r(25),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2-adapter-hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-adapter-hardware"}},[t._v("#")]),t._v(" 2. Adapter hardware")]),t._v(" "),e("p",[t._v("This page is about hardware specific details. For general information, refer to the "),e("RouterLink",{attrs:{to:"/guide/rangefinder/"}},[t._v("1. General")]),t._v(" page., for software related details please refer "),e("RouterLink",{attrs:{to:"/guide/rangefinder/cyphal.html"}},[t._v("Cyphal interface")]),t._v(" or "),e("RouterLink",{attrs:{to:"/guide/rangefinder/dronecan.html"}},[t._v("DroneCAN interface")]),t._v(".")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("View")]),t._v(" "),e("th",[t._v("Top")]),t._v(" "),e("th",[t._v("Bottom")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:r(331),alt:"drawing",width:"256"}})]),t._v(" "),e("td",[e("img",{attrs:{src:r(698),height:"256",alt:"drawing"}})]),t._v(" "),e("td",[e("img",{attrs:{src:r(381),height:"256",alt:"drawing"}})])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[e("img",{attrs:{src:r(699),width:"256",alt:"drawing"}})]),t._v(" "),e("td",[e("img",{attrs:{src:r(700),width:"256",alt:"drawing"}})])])])]),t._v(" "),e("h3",{attrs:{id:"_2-1-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-features"}},[t._v("#")]),t._v(" 2.1 Features")]),t._v(" "),e("ul",[e("li",[t._v("I2C port")]),t._v(" "),e("li",[t._v("UART port")]),t._v(" "),e("li",[t._v("5v or 3.3v solderable jumper to power up payload")]),t._v(" "),e("li",[t._v("Input voltage sensor")]),t._v(" "),e("li",[t._v("5v rail voltage sensor")]),t._v(" "),e("li",[t._v("CAN connectors: 2 "),e("a",{attrs:{href:"https://raccoonlabdev.github.io/docs/guide/wires/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UCANPHY Micro (JST-GH 4)"),e("OutboundLink")],1),t._v(", 2 "),e("a",{attrs:{href:"https://raccoonlabdev.github.io/docs/guide/wires/",target:"_blank",rel:"noopener noreferrer"}},[t._v("6-pin Molex"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Weight: 6.6 g (with cable 8 g)")]),t._v(" "),e("li",[t._v("LxWxH: 22 x 33 x 11.7 mm")])]),t._v(" "),e("h3",{attrs:{id:"_2-2-wire"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-wire"}},[t._v("#")]),t._v(" 2.2 Wire")]),t._v(" "),e("p",[t._v("Schematic can be provided via e-mail request or issue on github.")]),t._v(" "),e("p",[e("strong",[t._v("Connectors")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Connector")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("UCANPHY Micro (JST-GH 4)")]),t._v(" "),e("td",[t._v("Devices that deliver power to the bus are required to provide 4.9–5.5 V on the bus power line, 5.0 V nominal. Devices that are powered from the bus should expect 4.0–5.5 V on the bus power line. The current shall not exceed 1 A per connector.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("6-pin Molex  ("),e("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/pcb_receptacles/5025850670",target:"_blank",rel:"noopener noreferrer"}},[t._v("502585-0670"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/crimp_housings/5025780600",target:"_blank",rel:"noopener noreferrer"}},[t._v("502578-0600"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("td",[t._v("Contacts support up to 100 V, 2 A per contact. But the board may work only with 2S-6S.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("SWD")]),t._v(" "),e("td",[t._v("STM32 firmware updating using "),e("RouterLink",{attrs:{to:"/guide/programmer_sniffer/programmer.html"}},[t._v("programmer-sniffer")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("UART, I2C")]),t._v(" "),e("td",[t._v("Connectors should be used to deliver signal and power (below 1 amp) to payload such as RANGFINDER")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://raccoonlabdev.github.io/docs/guide/wires/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),e("OutboundLink")],1),t._v(" you can find manufacturer part number of connectors it self and its mates.")]),t._v(" "),e("p",[e("strong",[t._v("Pin configuration and functions")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Pin")]),t._v(" "),e("th",[t._v("2 CAN-HV")]),t._v(" "),e("th",[t._v("Pin")]),t._v(" "),e("th",[t._v("2 CAN-LV")]),t._v(" "),e("th",[t._v("SWD")]),t._v(" "),e("th",[t._v("I2C")]),t._v(" "),e("th",[t._v("UART")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Vin")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("5V in")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("Vcc")]),t._v(" "),e("td",[t._v("Vcc")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Vin")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("CAN High")]),t._v(" "),e("td",[t._v("SWCLK")]),t._v(" "),e("td",[t._v("SCL")]),t._v(" "),e("td",[t._v("RXI")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("CAN High")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("CAN Low")]),t._v(" "),e("td",[t._v("SWDIO")]),t._v(" "),e("td",[t._v("SDA")]),t._v(" "),e("td",[t._v("TXO")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("CAN Low")]),t._v(" "),e("td",[t._v("4")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("3.3V")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("GND")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"_2-3-specifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-specifications"}},[t._v("#")]),t._v(" 2.3 Specifications")]),t._v(" "),e("p",[e("strong",[t._v("Mechanical")])]),t._v(" "),e("p",[t._v("Mechanical drowing is shown on the picture below.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(701),alt:"drw",title:"drw"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Width, mm")]),t._v(" "),e("th",[t._v("Length, mm")]),t._v(" "),e("th",[t._v("Height, mm")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Outline")]),t._v(" "),e("td",[t._v("22.1")]),t._v(" "),e("td",[t._v("33.1")]),t._v(" "),e("td",[t._v("11.7")])]),t._v(" "),e("tr",[e("td",[t._v("PCB")]),t._v(" "),e("td",[t._v("22.1")]),t._v(" "),e("td",[t._v("33.1")]),t._v(" "),e("td",[t._v("1.6")])])])]),t._v(" "),e("p",[t._v("Total weight of device is 6.6 g.")]),t._v(" "),e("p",[t._v("You can download 3D model on "),e("a",{attrs:{href:"https://grabcad.com/library/dronecan-rangefinder-adapter-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("GrabCAD"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("Housing")])]),t._v(" "),e("p",[t._v("Information about case presented here.")]),t._v(" "),e("p",[e("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("MIN")]),t._v(" "),e("th",[t._v("MAX")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Vin (CAN1)")]),t._v(" "),e("td",[t._v("5.5")]),t._v(" "),e("td",[t._v("55*")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("V (CAN2, CAN3)")]),t._v(" "),e("td",[t._v("4.5")]),t._v(" "),e("td",[t._v("5.5")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("I max")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A")])]),t._v(" "),e("tr",[e("td",[t._v("Operating temperature")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("p",[t._v("*Noted Voltage should be delivered only with current limitation under 2.5 Amp.")]),t._v(" "),e("p",[e("strong",[t._v("Recommended operating conditions")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Vin (CAN3)")]),t._v(" "),e("td",[t._v("30")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("V (CAN1, CAN2)")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("I max")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("A")])])])]),t._v(" "),e("p",[e("strong",[t._v("ESD ratings")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Value")]),t._v(" "),e("th",[t._v("UNIT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Human-body model (HBM)")]),t._v(" "),e("td",[t._v("2000")]),t._v(" "),e("td",[t._v("V")])]),t._v(" "),e("tr",[e("td",[t._v("Charged-device model (CDM)")]),t._v(" "),e("td",[t._v("500")]),t._v(" "),e("td",[t._v("V")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-4-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-description"}},[t._v("#")]),t._v(" 2.4 Description")]),t._v(" "),e("p",[e("strong",[t._v("Functional Block Diagram")])]),t._v(" "),e("p",[e("strong",[t._v("Connection example diagram")])]),t._v(" "),e("p",[t._v("An example of Adapter node connection with "),e("a",{attrs:{href:"https://lightwarelidar.com/shop/lw20-c-100-m/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare LW20/C"),e("OutboundLink")],1),t._v(" ("),e("a",{attrs:{href:"https://www.documents.lightware.co.za/LW20%20-%20LiDAR%20Manual%20-%20Rev%2012.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),e("OutboundLink")],1),t._v(") and "),e("a",{attrs:{href:"https://www.garmin.com/en-US/p/557294",target:"_blank",rel:"noopener noreferrer"}},[t._v("Garmin-Lite v3"),e("OutboundLink")],1),t._v(" ("),e("a",{attrs:{href:"https://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("doc"),e("OutboundLink")],1),t._v(") is shown below:")]),t._v(" "),e("p",[e("img",{attrs:{src:r(702),alt:"",title:"Adapter and lw20_i2c wire"}})]),t._v(" "),e("p",[e("img",{attrs:{src:r(703),alt:"",title:"Adapter and garmin lite v3 wire"}})]),t._v(" "),e("h3",{attrs:{id:"_2-5-power-supply-recommendations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-power-supply-recommendations"}},[t._v("#")]),t._v(" 2.5 Power Supply Recommendations")]),t._v(" "),e("p",[t._v("Device is designed to operate from an input voltage supply range between 4.5 V and 5.5 V over CAN2 or CAN3 connector, or 5.5 - 30 V from CAN1. This input supply must be able to withstand the maximum input current and maintain a stable voltage. The resistance of the input supply rail should be low enough that an input current transient does not cause a high enough drop that can cause a false UVLO fault triggering and system reset. The amount of bulk capacitance is not critical, but a 47-μF or 100-μF electrolytic capacitor is a typical choice.")]),t._v(" "),e("h3",{attrs:{id:"_2-6-revision-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-revision-history"}},[t._v("#")]),t._v(" 2.6 Revision history")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("version")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("v3.1.0")]),t._v(" "),e("td",[t._v("Initial version with STM32G0 MCU")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);