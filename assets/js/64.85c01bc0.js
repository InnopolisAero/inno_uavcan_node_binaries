(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{579:function(t,e,a){t.exports=a.p+"assets/img/charger.358aaa66.png"},580:function(t,e,a){t.exports=a.p+"assets/img/algorithm.8467a1d3.png"},581:function(t,e,a){t.exports=a.p+"assets/img/normal_charging_process.3b633964.png"},582:function(t,e,a){t.exports=a.p+"assets/img/node_info.8f1a3118.png"},583:function(t,e,a){t.exports=a.p+"assets/img/parameters.a95e276b.png"},823:function(t,e,a){"use strict";a.r(e);var r=a(25),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dronecan-charger-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dronecan-charger-node"}},[t._v("#")]),t._v(" DroneCAN Charger node")]),t._v(" "),e("p",[t._v("This board allows to automatically charge a battery (up to 4S).")]),t._v(" "),e("p",[e("img",{attrs:{src:a(579),alt:"charger",title:"charger"}})]),t._v(" "),e("h3",{attrs:{id:"_1-dronecan-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-dronecan-interface"}},[t._v("#")]),t._v(" 1. DroneCAN interface")]),t._v(" "),e("p",[t._v("This node interacts with the following messages:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("message")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/Innopolis-UAV-Team/uavcan_custom_msgs/blob/master/inno_msgs/20052.ChargingStatus.uavcan",target:"_blank",rel:"noopener noreferrer"}},[t._v("inno_msgs.ChargingStatus"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/Innopolis-UAV-Team/uavcan_custom_msgs/blob/master/inno_msgs/20065.ChargingControlResponse.uavcan",target:"_blank",rel:"noopener noreferrer"}},[t._v("inno_msgs.ChargingControlResponse"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("publisher")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#circuitstatus",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.equipment.power.CircuitStatus"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("subscriber")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/Innopolis-UAV-Team/uavcan_custom_msgs/blob/master/inno_msgs/20051.ChargingControl.uavcan",target:"_blank",rel:"noopener noreferrer"}},[t._v("inno_msgs.ChargingControl"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("subscriber")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#batteryinfo",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.equipment.power.BatteryInfo"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("Besides required and highly recommended functions such as "),e("code",[t._v("NodeStatus")]),t._v(" and "),e("code",[t._v("GetNodeInfo")]),t._v(" this node also supports the following application-level functions:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("message")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#uavcanprotocolparam",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.protocol.param"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#restartnode",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.protocol.RestartNode"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("RPC-service")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#gettransportstats",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.protocol.GetTransportStats"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"_2-hardware-specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-hardware-specification"}},[t._v("#")]),t._v(" 2. Hardware specification")]),t._v(" "),e("p",[t._v("(in progress)")]),t._v(" "),e("h3",{attrs:{id:"_3-wire"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-wire"}},[t._v("#")]),t._v(" 3. Wire")]),t._v(" "),e("p",[t._v("This board has 4 connectors which may deliver a power to this device. They are described in the table below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Connector")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Vin (XT30)")]),t._v(" "),e("td",[t._v("This board consumes more power than a typical UAVCAN node, so it is powered using an additional socket.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("UCANPHY Micro (JST-GH 4)")]),t._v(" "),e("td",[t._v("Devices that deliver power to the bus are required to provide 4.9–5.5 V on the bus power line, 5.0 V nominal. Devices that are powered from the bus should expect 4.0–5.5 V on the bus power line. The current shall not exceed 1 A per connector.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("6-pin Molex  ("),e("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/pcb_receptacles/5025850670",target:"_blank",rel:"noopener noreferrer"}},[t._v("502585-0670"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/crimp_housings/5025780600",target:"_blank",rel:"noopener noreferrer"}},[t._v("502578-0600"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("td",[t._v("Contacts support up to 100 V, 2 A per contact. But the board may work only with 2S-6S.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("SWD")]),t._v(" "),e("td",[t._v("STM32 firmware updating using "),e("RouterLink",{attrs:{to:"/guide/pmu/charger/docs/guide/programmer_sniffer/"}},[t._v("programmer-sniffer")]),t._v(".")],1)])])]),t._v(" "),e("p",[t._v("It also has following board-specific connectors")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Connector")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("V_charging (XT30)")]),t._v(" "),e("td",[t._v("Charging output")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("DIOD (XT30)")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"_4-main-function-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-main-function-description"}},[t._v("#")]),t._v(" 4. Main function description")]),t._v(" "),e("p",[t._v("This node might be described using a state machine.")]),t._v(" "),e("p",[t._v("After boot the node is in the "),e("code",[t._v("CALIBRATION")]),t._v(" stage - it measures dc-dc output current using ADC multiple times and calculates average raw ADC value - the offset corresponded to the zero current. After the calibration stage, the node goes to the "),e("code",[t._v("WAITING")]),t._v(" stage where it is ready for further work. The calibration stage may be repeated only by a specific charing command.")]),t._v(" "),e("p",[t._v("If the node receives start charging command, it goes into the "),e("code",[t._v("TEST_WIRE")]),t._v(" stage and then starts charging process.")]),t._v(" "),e("p",[t._v("The charging process is divided into 2 main stages. It starts with "),e("code",[t._v("CHARGING WITH CONSTANT CURRENT (CC)")]),t._v(" stage then goes into "),e("code",[t._v("CHARGING WITH CONSTANT VOLTAGE (CV)")]),t._v(".")]),t._v(" "),e("p",[t._v("If battery voltage is more than maximum voltage (battery is charged) or less than some specific voltage (battery is not connected) or data receiving stops in goes into "),e("code",[t._v("CHECK FINISH")]),t._v(" stage. After some checks, it goes into "),e("code",[t._v("FINISH")]),t._v(" or "),e("code",[t._v("WAITING")]),t._v(" stages or even goes into the previous stage.")]),t._v(" "),e("p",[t._v("The whole state machine might be illustrated using the following flowchart diagram:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(580),alt:"charger",title:"charger"}})]),t._v(" "),e("p",[t._v("The typical 2-stages charging process might be illustrated using the following plot:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(581),alt:"scheme",title:"scheme"}})]),t._v(" "),e("p",[t._v("During both stages, this node uses I-regulator to keep constant current/voltage.")]),t._v(" "),e("h3",{attrs:{id:"_5-auxiliary-functions-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-auxiliary-functions-description"}},[t._v("#")]),t._v(" 5. Auxiliary functions description")]),t._v(" "),e("h4",{attrs:{id:"_5-1-circuit-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-circuit-status"}},[t._v("#")]),t._v(" 5.1. Circuit status")]),t._v(" "),e("p",[t._v("This node as well as any other our nodes measure "),e("code",[t._v("5V")]),t._v(" and "),e("code",[t._v("Vin")]),t._v(" voltages and send them in 2 "),e("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#circuitstatus",target:"_blank",rel:"noopener noreferrer"}},[t._v("uavcan.equipment.power.CircuitStatus"),e("OutboundLink")],1),t._v(" messages.")]),t._v(" "),e("p",[t._v("These voltages might be visualized using our custom "),e("a",{attrs:{href:"https://github.com/PonomarevDA/uavcan_gui_tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom uavcan_gui_tool"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The first message has "),e("code",[t._v("circuit_id=NODE_ID*10 + 0")]),t._v(" and following 3 significant fields:")]),t._v(" "),e("ol",[e("li",[t._v("voltage - is the 5V voltage")]),t._v(" "),e("li",[t._v("error_flags - might have ERROR_FLAG_OVERVOLTAGE or ERROR_FLAG_UNDERVOLTAGE or non of them")])]),t._v(" "),e("p",[t._v("The second message has "),e("code",[t._v("circuit_id=NODE_ID*10 + 1")]),t._v(" and following 3 significant fields:")]),t._v(" "),e("ol",[e("li",[t._v("voltage - is the Vin voltage")]),t._v(" "),e("li",[t._v("error_flags - ERROR_FLAG_UNDERVOLTAGE or non of them. There is no ERROR_FLAG_OVERVOLTAGE flag because the expected max Vin voltage is unknown.")])]),t._v(" "),e("h4",{attrs:{id:"_5-2-node-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-node-info"}},[t._v("#")]),t._v(" 5.2. Node info")]),t._v(" "),e("p",[t._v("Every firmware store following info that might be received as a response on NodeInfo request. It stores:")]),t._v(" "),e("ul",[e("li",[t._v("software version,")]),t._v(" "),e("li",[t._v("an unique identifier.")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(582),alt:"node_info",title:"node_info"}})]),t._v(" "),e("h4",{attrs:{id:"_5-3-log-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-log-messages"}},[t._v("#")]),t._v(" 5.3. Log messages")]),t._v(" "),e("p",[t._v("(in process)")]),t._v(" "),e("h3",{attrs:{id:"_6-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-parameters"}},[t._v("#")]),t._v(" 6. Parameters")]),t._v(" "),e("p",[t._v("The table with parameters is shown below.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(583),alt:"scheme",title:"scheme"}})]),t._v(" "),e("p",[t._v("A description of all parameters shown in the tables below.")]),t._v(" "),e("h4",{attrs:{id:"_6-1-common-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-common-parameters"}},[t._v("#")]),t._v(" 6.1. Common parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Parameter name")]),t._v(" "),e("th",[t._v("Reboot required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("ID")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Node ID")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("log_level")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Specify what level of log can be sent.")])]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td",[t._v("name")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Reserved.")])])])]),t._v(" "),e("h4",{attrs:{id:"_6-2-regulator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-regulator"}},[t._v("#")]),t._v(" 6.2. Regulator")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Parameter name")]),t._v(" "),e("th",[t._v("Reboot required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("max_dac_delta")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Limit the maximum change of DAC value per millisecond.")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("min_dac_value")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Limit the minimum possible command value. of DAC.")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("current_filter_size")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Size of moving average current filter.")])]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[t._v("current_loop_I_1e6")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Integral coefficient.")])]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("first_stage_current_mA")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Desired current on the first stage.")])]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td",[t._v("second_stage_cell_voltage_mV")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Desired voltage on the second stage.")])]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td",[t._v("third_stage_current_mA")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Reserved.")])])])]),t._v(" "),e("h4",{attrs:{id:"_6-3-battery-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-battery-settings"}},[t._v("#")]),t._v(" 6.3. Battery settings")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Parameter name")]),t._v(" "),e("th",[t._v("Reboot required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("number_of_cells")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Number of battery cells.")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("min_cell_voltage_mV")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Min cell voltage of the battery in mV. Measured battery voltage lower than this value will be interpreted as critical.")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("max_cell_voltage_mV")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Max cell voltage of the battery in mV. Measured battery voltage higher than this value will indicate that battery is already charged.")])])])]),t._v(" "),e("h4",{attrs:{id:"_6-4-other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-other"}},[t._v("#")]),t._v(" 6.4. Other")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Parameter name")]),t._v(" "),e("th",[t._v("Reboot required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("charger_pub_period")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Publish rate in milliseconds.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("battery_voltage_source")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("0 means internal voltage source through ADC, 1 means BatteryStatus.")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("fixed_dac")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Debug only. 0 means normal usage, other value means specific fixed DAC output.")])]),t._v(" "),e("tr",[e("td",[t._v("15")]),t._v(" "),e("td",[t._v("stop_voltage_percent_of_max")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("When battery charge level reaches this level, the charging will be stopped.")])])])]),t._v(" "),e("h3",{attrs:{id:"_7-led-indication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-led-indication"}},[t._v("#")]),t._v(" 7. Led indication")]),t._v(" "),e("p",[t._v("The board has 3 rgb LEDs which indicate current state of the node.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Stage")]),t._v(" "),e("th",[t._v("Mode")]),t._v(" "),e("th",[t._v("Rgb led")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Calibration")]),t._v(" "),e("td",[t._v("Initialization")]),t._v(" "),e("td",[t._v("Blue pulsing")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Disabled")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("Blue solid")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Waiting")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("Blue pulsing")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Test wire")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("Rgb pulsing")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("Charging CC")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("1st green blinking, others disabled")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("Charging CV")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("1st green solid, 2nd green blinking, 3rd disabled")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("Check finish")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("1st and 2nd green solid, 3rd green blinking")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("Finish")]),t._v(" "),e("td",[t._v("Operational")]),t._v(" "),e("td",[t._v("All solid")])])])]),t._v(" "),e("h3",{attrs:{id:"_8-usage-example-on-a-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-usage-example-on-a-table"}},[t._v("#")]),t._v(" 8. Usage example on a table")]),t._v(" "),e("p",[t._v("(in progress)")]),t._v(" "),e("h3",{attrs:{id:"_9-real-application-usage-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-real-application-usage-example"}},[t._v("#")]),t._v(" 9. Real application usage example")]),t._v(" "),e("p",[t._v("(in progress)")])])}),[],!1,null,null,null);e.default=_.exports}}]);