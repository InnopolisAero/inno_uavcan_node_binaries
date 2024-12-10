(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{336:function(t,e,a){t.exports=a.p+"assets/img/bench_test.ca466645.png"},422:function(t,e,a){t.exports=a.p+"assets/img/y_mon.4334964a.png"},423:function(t,e,a){t.exports=a.p+"assets/img/yukon_monitor_default.17416c84.png"},424:function(t,e,a){t.exports=a.p+"assets/img/yukon_monitor_configured.1fe6d532.png"},425:function(t,e,a){t.exports=a.p+"assets/img/yukon_subscription.b4c768cc.png"},766:function(t,e,a){"use strict";a.r(e);var r=a(25),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_3-cyphal-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cyphal-interface"}},[t._v("#")]),t._v(" 3. Cyphal interface")]),t._v(" "),e("p",[t._v("This page is about Cyphal related details such as interface, supported features, registers, configuration and usage examples and software versions. For general information please refer to the "),e("RouterLink",{attrs:{to:"/guide/airspeed/"}},[t._v("1. General")]),t._v(" page, for hardware related details including wiring examples please refer to the "),e("RouterLink",{attrs:{to:"/guide/airspeed/hardware.html"}},[t._v("2. Hardware")]),t._v(" page.")],1),t._v(" "),e("h2",{attrs:{id:"_3-1-cyphal-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-cyphal-interface"}},[t._v("#")]),t._v(" 3.1. Cyphal interface")]),t._v(" "),e("p",[t._v("This node interacts with the following data types:")]),t._v(" "),e("p",[e("strong",[t._v("Common for any node")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Message")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("pub")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/7509.Heartbeat.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.node.Heartbeat"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/430.GetInfo.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.node.GetInfo.Response"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/435.ExecuteCommand.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.node.ExecuteCommand"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/register/385.List.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.register.List"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/register/384.Access.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.register.Access"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("pub (since hardware v3)")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/port/7510.List.0.1.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.node.port.List"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("Here "),e("code",[t._v("ExecuteCommand")]),t._v(" supports "),e("code",[t._v("COMMAND_RESTART=65535")]),t._v(", "),e("code",[t._v("COMMAND_FACTORY_RESET=65532")]),t._v(" and "),e("code",[t._v("COMMAND_STORE_PERSISTENT_STATES=65530")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Circuit status service")])]),t._v(" "),e("p",[t._v("Like any other RaccoonLab node, this node also supports the "),e("code",[t._v("Circuit status service")]),t._v(". It uses the following subjects:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Message")]),t._v(" "),e("th",[t._v("Topic name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("pub")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("uavcan.si.sample.voltage.Scalar.1.0")])]),t._v(" "),e("td",[t._v("crct.5v")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("pub")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("uavcan.si.sample.voltage.Scalar.1.0")])]),t._v(" "),e("td",[t._v("crct.vin")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("pub")]),t._v(" "),e("td",[e("a",{attrs:{href:""}},[t._v("uavcan.si.sample.temperature.Scalar.1.0")])]),t._v(" "),e("td",[t._v("crct.temp")])])])]),t._v(" "),e("p",[e("strong",[t._v("Airspeed service")])]),t._v(" "),e("p",[t._v("It uses the following subjects:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Message")]),t._v(" "),e("th",[t._v("Topic name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/si/sample/velocity/Scalar.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.si.sample.velocity.Scalar.1.0"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("aspd.speed (not supported yet)")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/si/sample/pressure/Scalar.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.si.sample.pressure.Scalar.1.0"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("aspd.press")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/si/sample/temperature/Scalar.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.si.sample.temperature.Scalar.1.0"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("aspd.temp")])])])]),t._v(" "),e("h2",{attrs:{id:"_3-2-cyphal-registers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cyphal-registers"}},[t._v("#")]),t._v(" 3.2. Cyphal Registers")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Register  name")]),t._v(" "),e("th",[t._v("Note")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("id")]),t._v(" "),e("td",[t._v("reboot required")]),t._v(" "),e("td",[t._v("Node ID")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("uavcan.pub.press.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("uavcan.pub.press.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.pressure.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("uavcan.pub.speed.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("uavcan.pub.speed.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.velocity.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("uavcan.pub.temp.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("uavcan.pub.temp.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.temperature.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.5v.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.5v.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.voltage.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.vin.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.vin.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.voltage.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.temp.id")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Port identifier")])]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("uavcan.pub.crct.temp.type")]),t._v(" "),e("td",[t._v("immutable")]),t._v(" "),e("td",[t._v("uavcan.si.sample.temperature.Scalar.1.0")])]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td",[t._v("name")]),t._v(" "),e("td",[t._v("reboot required")]),t._v(" "),e("td",[t._v("Node custom name")])])])]),t._v(" "),e("p",[t._v("You can get the list of registers, read and write them using "),e("a",{attrs:{href:"https://github.com/OpenCyphal/yakut",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yakut"),e("OutboundLink")],1),t._v(" cli or "),e("a",{attrs:{href:"https://github.com/OpenCyphal-Garage/yukon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yukon"),e("OutboundLink")],1),t._v(" gui.")]),t._v(" "),e("h2",{attrs:{id:"_3-3-getting-started-bench-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-getting-started-bench-test"}},[t._v("#")]),t._v(" 3.3. Getting started (bench test)")]),t._v(" "),e("p",[t._v("Before using in the real application, it is necessary to configure the device. "),e("a",{attrs:{href:"https://github.com/OpenCyphal/yakut",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yakut"),e("OutboundLink")],1),t._v(" cli and "),e("a",{attrs:{href:"https://github.com/OpenCyphal-Garage/yukon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yukon"),e("OutboundLink")],1),t._v(" are recommended.")]),t._v(" "),e("p",[t._v("The simplest connection scheme just for bench testing and configuration is shown below.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(336),alt:"bench_test_standby",title:"bench_test_standby"}})]),t._v(" "),e("p",[e("strong",[t._v("1. Configure the environment")])]),t._v(" "),e("p",[t._v("Typically you need to:")]),t._v(" "),e("ol",[e("li",[t._v("Configure all required environment variables")]),t._v(" "),e("li",[t._v("Compile DSDL based on public regulated data types")]),t._v(" "),e("li",[t._v("Create SLCAN based on CAN sniffer")])]),t._v(" "),e("p",[t._v("Please refer to the "),e("code",[t._v("Yakut")]),t._v(" and "),e("code",[t._v("Yukon")]),t._v(" documentations to understand how to do it.")]),t._v(" "),e("p",[e("strong",[t._v("2. Monitor the node")])]),t._v(" "),e("p",[t._v("Let's say, you have a correctly connected Cyphal node to a CAN sniffer.")]),t._v(" "),e("p",[t._v("The node state might be visualized using "),e("code",[t._v("Yakut")]),t._v(". Run "),e("code",[t._v("y mon")]),t._v(" to see the node. The possible command output is:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(422),alt:"y_mon",title:"y_mon"}})]),t._v(" "),e("p",[t._v("Alternatively, you can use "),e("code",[t._v("Yukon")]),t._v(". An example of the Monitor window is shown below:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(423),alt:"yukon_monitor_default",title:"yukon_monitor_default"}})]),t._v(" "),e("p",[e("strong",[t._v("3. Ports configuration")])]),t._v(" "),e("p",[t._v("Must have ports to be configured are:")]),t._v(" "),e("ul",[e("li",[t._v("aspd.press,")]),t._v(" "),e("li",[t._v("aspd.temp.")])]),t._v(" "),e("p",[t._v("According to "),e("a",{attrs:{href:"https://opencyphal.org/specification/Cyphal_Specification.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("the specification"),e("OutboundLink")],1),t._v(" the port IDs should be in the range [0, 6143].")]),t._v(" "),e("p",[t._v("After you assign port IDs, save the parameters and reboot the node, you will see the following:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(424),alt:"yukon_monitor_configured",title:"yukon_monitor_configured"}})]),t._v(" "),e("p",[e("strong",[t._v("4. Check the result")])]),t._v(" "),e("p",[t._v("You can subscribe to the sensor:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(425),alt:"yukon_subscription",title:"yukon_subscription"}})]),t._v(" "),e("h2",{attrs:{id:"_3-4-ardupilot-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-ardupilot-integration"}},[t._v("#")]),t._v(" 3.4. Ardupilot integration")]),t._v(" "),e("blockquote",[e("p",[t._v("not supported yet")])]),t._v(" "),e("h2",{attrs:{id:"_3-5-px4-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-px4-integration"}},[t._v("#")]),t._v(" 3.5. PX4 integration")]),t._v(" "),e("blockquote",[e("p",[t._v("not supported yet")])]),t._v(" "),e("h2",{attrs:{id:"_3-6-software-versions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-software-versions"}},[t._v("#")]),t._v(" 3.6. Software versions")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Version")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("SHA")]),t._v(" "),e("th",[t._v("Link")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("v1.4.0")]),t._v(" "),e("td",[t._v("Jun 19, 2023")]),t._v(" "),e("td",[t._v("52df65ce")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/RaccoonlabDev/docs/releases/tag/v1.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("v1.2")]),t._v(" "),e("td",[t._v("Feb 23, 2023")]),t._v(" "),e("td",[t._v("b4e042b")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/RaccoonlabDev/docs/releases/tag/v1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("v1.0.2")]),t._v(" "),e("td",[t._v("Oct 23, 2022")]),t._v(" "),e("td",[t._v("53abc8b")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/RaccoonlabDev/docs/releases/tag/v1.0.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);