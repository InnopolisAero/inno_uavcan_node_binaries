(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{280:function(e,t,a){e.exports=a.p+"assets/img/view.2b66a503.png"},765:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_1-cyphal-dronecan-airspeed-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-cyphal-dronecan-airspeed-node"}},[e._v("#")]),e._v(" 1. Cyphal/DroneCAN Airspeed node")]),e._v(" "),t("p",[e._v("RaccoonLab Airspeed node is a wrapper under "),t("a",{attrs:{href:"https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS4525DO%7FB2%7Fpdf%7FEnglish%7FENG_DS_MS4525DO_B2.pdf%7FCAT-BLPS0002",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS4525DO"),t("OutboundLink")],1),e._v(" airspeed sensor that provides Cyphal or DroneCAN interface. It reads differential pressure and temperature from the sensor via I2C and publishes them via CAN bus. The is compatible with PX4 and Ardupilot-based autopilots and supports both Cyphal and DroneCAN interfaces. The node is highly recommended for light unmanned aerial (UAV) such as plane and VTOL for measuring airspeed.")]),e._v(" "),t("p",[e._v("For interface related details please refer the corresponded section:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/guide/airspeed/cyphal.html"}},[e._v("Cyphal interface")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/guide/airspeed/dronecan.html"}},[e._v("DroneCAN interface")])],1)]),e._v(" "),t("p",[e._v("For hardware related details please refer to "),t("RouterLink",{attrs:{to:"/guide/airspeed/hardware.html"}},[e._v("hardware")]),e._v(" page.")],1),e._v(" "),t("img",{attrs:{src:a(280),alt:"drawing",width:"640"}}),e._v(" "),t("h2",{attrs:{id:"_1-1-main-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-main-function"}},[e._v("#")]),e._v(" 1.1. Main function")]),e._v(" "),t("p",[e._v("This node measures differential pressure and temperature with high rate (100 Hz by default) and publishes averaged data with a low rate (10 Hz should be enough for PX4 Autopilot otherwise it will anyway perform average filter). Publication and measurement rates might be configured using node parameters, but it is recommended to use default values.")]),e._v(" "),t("p",[e._v("According to "),t("a",{attrs:{href:"https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS4525DO%7FB2%7Fpdf%7FEnglish%7FENG_DS_MS4525DO_B2.pdf%7FCAT-BLPS0002",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS4525DO datasheet"),t("OutboundLink")],1),e._v(", the sensor has the following range of measured data:")]),e._v(" "),t("ul",[t("li",[e._v("differential pressure is from -1 psi to +1 psi or from -6894.757 pa to +6894.757 pa.")]),e._v(" "),t("li",[e._v("temperature is from -50 to +150 Celcius or from 223 to 423 Kelvin.")])]),e._v(" "),t("p",[e._v("If we consider temperature ~288 Kelvin and pressure 101325 Pa according to the ISA model differential pressure interval above should be enough for up to 100 m/sec airspeed that is suitable for a wide area of small VTOL application.")]),e._v(" "),t("h2",{attrs:{id:"_1-2-auxiliary-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-auxiliary-functions"}},[e._v("#")]),e._v(" 1.2. Auxiliary functions")]),e._v(" "),t("p",[t("strong",[e._v("1.2.1. Circuit status")])]),e._v(" "),t("p",[e._v("It sends 2 "),t("a",{attrs:{href:"https://dronecan.github.io/Specification/7._List_of_standard_data_types/#circuitstatus",target:"_blank",rel:"noopener noreferrer"}},[e._v("uavcan.equipment.power.CircuitStatus"),t("OutboundLink")],1),e._v(" messages with measured "),t("code",[e._v("5V")]),e._v(" and "),t("code",[e._v("Vin")]),e._v(".")]),e._v(" "),t("p",[e._v("The first message has "),t("code",[e._v("circuit_id=NODE_ID*10 + 0")]),e._v(" and following 2 significant fields:")]),e._v(" "),t("ol",[t("li",[e._v("voltage - is the "),t("code",[e._v("5V")]),e._v(" voltage")]),e._v(" "),t("li",[e._v("error_flags - might have "),t("code",[e._v("ERROR_FLAG_OVERVOLTAGE")]),e._v(" or "),t("code",[e._v("ERROR_FLAG_UNDERVOLTAGE")]),e._v(" or non of them")])]),e._v(" "),t("p",[e._v("The second message has "),t("code",[e._v("circuit_id=NODE_ID*10 + 1")]),e._v(" and following 2 significant fields:")]),e._v(" "),t("ol",[t("li",[e._v("voltage - is the "),t("code",[e._v("Vin")]),e._v(" voltage")]),e._v(" "),t("li",[e._v("error_flags - "),t("code",[e._v("ERROR_FLAG_UNDERVOLTAGE")]),e._v(" or non of them. There is no "),t("code",[e._v("ERROR_FLAG_OVERVOLTAGE")]),e._v(" flag because the expected max "),t("code",[e._v("Vin")]),e._v(" voltage is unknown.")])]),e._v(" "),t("p",[t("strong",[e._v("1.2.2 Calibration")])]),e._v(" "),t("p",[e._v("Each differential pressure device has an offset in his measurement and requires a calibration before usage.")]),e._v(" "),t("p",[e._v("There are 2 ways how can you do a calibration:")]),e._v(" "),t("ol",[t("li",[e._v("Normally, an autopilot may perfrorm his own calibration of this device. For example, PX4 stores "),t("code",[e._v("SENS_DPRES_OFF")]),e._v(" calibration parameter in flash adds his value to each measurement from a differential pressure device before converting it to an airspeed. This way might be preffered for a normal user.")]),e._v(" "),t("li",[e._v("Alternativelly, for example, if your autopilot doesn't support such calibration, you may perform internal calibration on the node side using uavcan parameters (see "),t("a",{attrs:{href:"#52-calibration"}},[e._v("5.2. Calibration")]),e._v("). This also might be the only possible solution in case if your autopilot doesn't support individual calibration for each differential pressure sensor (PX4 stores a single parameter for all differential pressure devices).")])]),e._v(" "),t("p",[t("strong",[e._v("Calibration on the node side")])]),e._v(" "),t("p",[e._v("In general, calibration is done using 2 parameters:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("airspeed_calibration_offset")]),e._v(" is used for storing an offset in flash memory")]),e._v(" "),t("li",[t("code",[e._v("airspeed_calib_request")]),e._v(" is used for sending a request to start an automaticall calibration.")])]),e._v(" "),t("p",[e._v("By setting "),t("code",[e._v("airspeed_calib_request")]),e._v(" parameter to 1 the node goes into the calibration mode for 10 seconds where it summarizes all measured differential pressures and in the end divides the sum by the number of measurements. The negative resulted averaged value is written into the "),t("code",[e._v("airspeed_calibration_offset")]),e._v(" parameter. This offset is added to the differential pressure of each measurement. During the calibration process, the node has "),t("code",[e._v("INITIALIZATION")]),e._v(" mode. After the initialization process, the node doesn't save parameters to the flash memory, you need to do it manually.\nAs an alternative, you may always manually set "),t("code",[e._v("airspeed_calibration_offset")]),e._v(" parameter.")]),e._v(" "),t("p",[t("strong",[e._v("1.2.3. Enable/disable")])]),e._v(" "),t("p",[e._v("This function allows you to start and stop publishing via UAVCAN in real-time without physical disconnect.")]),e._v(" "),t("p",[t("strong",[e._v("1.2.4. Software version")])]),e._v(" "),t("p",[t("code",[e._v("GetNodeInfo")]),e._v(" response contains a software version that allows you to differentiate one firmware from another. See "),t("code",[e._v("Node Properties")]),e._v(" window in "),t("code",[e._v("uavcan gui tool")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("1.2.5. Hardware version")])]),e._v(" "),t("p",[e._v("Not implemented yet.")]),e._v(" "),t("p",[t("strong",[e._v("1.2.6. Hardware unique ID")])]),e._v(" "),t("p",[e._v("GetNodeInfo response contains hardware unique ID that allows you to differentiate one board from another. See "),t("code",[e._v("Node Properties")]),e._v(" window in "),t("code",[e._v("uavcan gui tool")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("1.2.7. Led indication")])]),e._v(" "),t("p",[e._v("There is an internal led that may allow you to understand possible problems. It blinks from 1 to 10 times within 4 seconds. By counting a number of blinks you can define the current status of the node.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Number of blinks")]),e._v(" "),t("th",[e._v("Uavcan health")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("OK")]),e._v(" "),t("td",[e._v("Everything is ok.")])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("OK")]),e._v(" "),t("td",[e._v("There is no RawCommand at least for the last 0.5 seconds (it's ok, just in case).")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[e._v("WARNING")]),e._v(" "),t("td",[e._v("This node can't see any other nodes in UAVCAN network, check your cables.")])]),e._v(" "),t("tr",[t("td",[e._v("4")]),e._v(" "),t("td",[e._v("ERROR")]),e._v(" "),t("td",[e._v("There is a problem with circuit voltage, look at the circuit status message to get details. It may happen when you power it from SWD since it has only 3.3 V, otherwise, be careful with the power supply. This check might be turned off using params.")])]),e._v(" "),t("tr",[t("td",[e._v("5")]),e._v(" "),t("td",[e._v("CRITICAL")]),e._v(" "),t("td",[e._v("There is a problem with the periphery initialization level. Probably you load the wrong firmware.")])])])]),e._v(" "),t("h2",{attrs:{id:"_1-3-software-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-software-update"}},[e._v("#")]),e._v(" 1.3. Software update")]),e._v(" "),t("p",[e._v("The node doesn't yet support software upload via CAN yet. But the next generation of the device will be. We will be using a "),t("a",{attrs:{href:"https://github.com/Zubax/kocherga",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kocherga bootloader"),t("OutboundLink")],1),e._v(" in the future. At the moment the only way to upload the software is to use a programmer. See "),t("a",{attrs:{href:"https://raccoonlabdev.github.io/docs/guide/programmer_sniffer/#_3-programmer-usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("the programmer usage section"),t("OutboundLink")],1),e._v(" for details.")])])}),[],!1,null,null,null);t.default=o.exports}}]);