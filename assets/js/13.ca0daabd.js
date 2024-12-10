(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{280:function(t,r,e){t.exports=e.p+"assets/img/view.2b66a503.png"},285:function(t,r,e){t.exports=e.p+"assets/img/view.4bf1b7bb.png"},292:function(t,r,e){t.exports=e.p+"assets/img/t-view-bottom.bdcbed07.png"},314:function(t,r,e){t.exports=e.p+"assets/img/r-view.66bcf405.jpg"},344:function(t,r,e){t.exports=e.p+"assets/img/airframe.686280a7.png"},349:function(t,r,e){t.exports=e.p+"assets/img/t-view-top.27435584.png"},350:function(t,r,e){t.exports=e.p+"assets/img/t-view.ac5bb3ad.png"},493:function(t,r,e){t.exports=e.p+"assets/img/view.8746517f.png"},494:function(t,r,e){t.exports=e.p+"assets/img/actuator_panel_cyphal.77289cce.png"},495:function(t,r,e){t.exports=e.p+"assets/img/listener_sensor_mag.2b0b1b56.jpg"},496:function(t,r,e){t.exports=e.p+"assets/img/5_config_1.18355a5d.png"},497:function(t,r,e){t.exports=e.p+"assets/img/5_config_2.62bb82dd.png"},498:function(t,r,e){t.exports=e.p+"assets/img/5_gui_tool_connect.7133edce.png"},499:function(t,r,e){t.exports=e.p+"assets/img/5_gui_tool_nodes.1bc745b1.jpg"},500:function(t,r,e){t.exports=e.p+"assets/img/6_pre_flight_test_actuator_panel.bfa74805.png"},501:function(t,r,e){t.exports=e.p+"assets/img/6_pre_flight_test_enumeration.1d193edc.png"},502:function(t,r,e){t.exports=e.p+"assets/img/motor_outputs.0e709e24.jpg"},790:function(t,r,e){"use strict";e.r(r);var a=e(25),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"small-quadcopter-based-on-px4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#small-quadcopter-based-on-px4"}},[t._v("#")]),t._v(" Small quadcopter based on PX4")]),t._v(" "),r("p",[t._v("This example is based on "),r("code",[t._v("Cyphal/DroneCAN Quadcopter KIT")]),t._v(".")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:e(344),alt:"drawing",width:"466"}})]),t._v(" "),r("td",[r("img",{attrs:{src:e(493),alt:"drawing",width:"333"}})])])])]),t._v(" "),r("h3",{attrs:{id:"content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" CONTENT")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#1-prerequisites"}},[t._v("Prerequisites")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#2-connection-diagram"}},[t._v("Connection diagram")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#3-layout"}},[t._v("Layout")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#4-autopilot-configuration"}},[t._v("Autopilot configuration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#5-nodes-configuration"}},[t._v("Nodes configuration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#6-pre-flight-tests"}},[t._v("Pre-flight tests")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#7-flight-tests"}},[t._v("Flight tests")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#8-post-flight-analisys"}},[t._v("Post-flight analisys")])])]),t._v(" "),r("h3",{attrs:{id:"_1-prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-prerequisites"}},[t._v("#")]),t._v(" 1. Prerequisites")]),t._v(" "),r("p",[t._v("It has the following RaccoonLab devices:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("№")]),t._v(" "),r("th",[t._v("View")]),t._v(" "),r("th",[t._v("Device")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("img",{attrs:{src:e(314),width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/autopilot/"}},[t._v("RL Autopilot v6x")])],1)]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[r("img",{attrs:{src:e(292),alt:"drawing",width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/gps_mag_baro/"}},[t._v("co.rl.gnss v2.5.0 NEO-M8N")])],1)]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[r("img",{attrs:{src:e(285),alt:"drawing",width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/can_pwm/can_pwm_micro.html"}},[t._v("co.rl.micro v1.2.2")]),t._v(" x4 "),r("br"),t._v(" Each node is used for a separated motor control: "),r("br"),t._v(" - 0: right front "),r("br"),t._v(" - 1: left rear "),r("br"),t._v(" - 2: left front "),r("br"),t._v(" - 3: right rear")],1)]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("img",{attrs:{src:e(349),alt:"drawing",width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/power/"}},[t._v("co.rl.power v3.1.0")])],1)]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("img",{attrs:{src:e(350),alt:"drawing",width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/rangefinder/uRANGEFINDER.html"}},[t._v("co.rl.range v3.0.0")])],1)]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("img",{attrs:{src:e(280),alt:"drawing",width:"100"}})]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/guide/airspeed/"}},[t._v("co.rl.airspeed v3.0.0")])],1)])])]),t._v(" "),r("p",[t._v("Here is a list of all the things you will need.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("N")]),t._v(" "),r("th",[t._v("Name Link")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.amazon.nl/Brushless-RS2205-Littlebee-Blheli_S-Multicopterbrushless/dp/B0C6CZJV23/ref=sr_1_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESC regulator"),r("OutboundLink")],1)]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("https://grabcad.com/library/hglrc-30a-brushless-esc-1")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.amazon.nl/Xinwoer-RS2205-Afstandsbediening-Accessoire-Quadcopters/dp/B07ZHV55TF/ref=sr_1_12",target:"_blank",rel:"noopener noreferrer"}},[t._v("BLDC motors"),r("OutboundLink")],1)]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("https://grabcad.com/library/emax-rs2205-s-2300kv-brushless-motor-1")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.amazon.com/iFlight-Titan-250mm-Freestyle-Carbon/dp/B087FBDGPP/ref=sxin_15_pa_sp_search_thematic_sspa",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frame"),r("OutboundLink")],1)]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("https://grabcad.com/library/hskrc-xl7-1")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("Prop")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("https://grabcad.com/library/gemfan-hurricane-51466-propeller-1")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("Battery")]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("https://grabcad.com/library/turnigy-2200mah-3s-20c-lipo-pack-1")])])])]),t._v(" "),r("h3",{attrs:{id:"_4-autopilot-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-autopilot-configuration"}},[t._v("#")]),t._v(" 4. Autopilot configuration")]),t._v(" "),r("p",[r("strong",[t._v("Step 1. Load firmware and reset settings")])]),t._v(" "),r("p",[t._v("Load the latest stable firmware and reset all settings to default.")]),t._v(" "),r("p",[r("strong",[t._v("Step 2. Select the airframe")])]),t._v(" "),r("p",[t._v("It should be "),r("a",{attrs:{href:"https://dev.px4.io/master/en/airframes/airframe_reference.html#quadrotor-x",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generic Quadcopter"),r("OutboundLink")],1),t._v(" airframe with SYS_AUTOSTART = 4001.")]),t._v(" "),r("p",[r("strong",[t._v("Step 3. Configure Actuators")])]),t._v(" "),r("img",{attrs:{src:e(494),alt:"drawing",width:"400"}}),t._v(" "),r("p",[r("strong",[t._v("Step 4. MAVLink Console")])]),t._v(" "),r("p",[t._v("Type "),r("code",[t._v("uavcan status")]),t._v(" in MAVLink Console. You should get a similar response:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Sensor: uavcan_baro\nchannel 0: node id 74 --\x3e instance 2\n\nSensor: uavcan_battery\nchannel 0: node id 31 --\x3e instance 0\nchannel 1: node id 11 --\x3e instance 1\n\nSensor: uavcan_differential_pressure\nchannel 0: node id 79 --\x3e instance 0\n\nSensor: uavcan_gnss\nchannel 0: node id 74 --\x3e instance 0\n\nSensor: uavcan_mag\nchannel 0: node id 74 --\x3e instance 1\n\nSensor: uavcan_rangefinder\nchannel 0: node id 61 --\x3e instance 0\n\nOnline nodes (Node ID, Health, Mode):\n     11 OK         OPERAT    \n     21 OK         OPERAT    \n     22 OK         OPERAT    \n     23 OK         OPERAT    \n     24 OK         OPERAT    \n     31 OK         OPERAT    \n     61 OK         OPERAT    \n     74 OK         OPERAT    \n     79 OK         OPERAT    \n     127 OK         OPERAT\n")])])]),r("p",[r("strong",[t._v("Step 5. Check all components")])]),t._v(" "),r("img",{attrs:{src:e(495),alt:"drawing",width:"400"}}),t._v(" "),r("h3",{attrs:{id:"_5-nodes-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-nodes-configuration"}},[t._v("#")]),t._v(" 5. Nodes configuration")]),t._v(" "),r("ol",[r("li",[t._v("Power the drone. Connect you computer with CAN bus via CAN-sniffer.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:e(496),alt:"drawing",width:"300"}})]),t._v(" "),r("td",[r("img",{attrs:{src:e(497),alt:"drawing",width:"300"}})])])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("Run gui_tool (for DroneCAN) or yakut (for Cyphal)")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:e(498),alt:"drawing",width:"440"}})]),t._v(" "),r("td",[r("img",{attrs:{src:e(499),alt:"drawing",width:"300"}})])])])]),t._v(" "),r("p",[t._v("In this setyp, GPS_MAG_BARO has configuration by default.")]),t._v(" "),r("p",[t._v("Micro nodes has the following config:")]),t._v(" "),r("ul",[r("li",[t._v("front right: "),r("code",[t._v("pwm.1_ch")]),t._v(" = 0")]),t._v(" "),r("li",[t._v("rear left: "),r("code",[t._v("pwm.1_ch")]),t._v(" = 1")]),t._v(" "),r("li",[t._v("front left: "),r("code",[t._v("pwm.1_ch")]),t._v(" = 2")]),t._v(" "),r("li",[t._v("rear right: "),r("code",[t._v("pwm.1_ch")]),t._v(" = 3")])]),t._v(" "),r("h3",{attrs:{id:"_6-pre-flight-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-pre-flight-tests"}},[t._v("#")]),t._v(" 6. Pre-flight tests")]),t._v(" "),r("p",[t._v("Before a real flight, try QGC Actuator Panel to verify that all motors:")]),t._v(" "),r("ol",[r("li",[t._v("Correctly enumerated (0 - front right, 1 - rear left, 2 - front left, 3 - rear right)")]),t._v(" "),r("li",[t._v("Properly calibrated (they should be controlled withing full control range)")]),t._v(" "),r("li",[t._v("Have correct spin direction")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:e(500),alt:"drawing",width:"330"}})]),t._v(" "),r("td",[r("img",{attrs:{src:e(501),alt:"drawing",width:"400"}})])])])]),t._v(" "),r("p",[t._v("Consider advanced testing with HITL simulator.")]),t._v(" "),r("h3",{attrs:{id:"_7-flight-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-flight-tests"}},[t._v("#")]),t._v(" 7. Flight tests")]),t._v(" "),r("p",[t._v("Repostory with flight logs: https://github.com/PonomarevDA/hany_drone")]),t._v(" "),r("h3",{attrs:{id:"_8-post-flight-analisys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-post-flight-analisys"}},[t._v("#")]),t._v(" 8. Post-flight analisys")]),t._v(" "),r("p",[t._v("Use https://review.px4.io/ for flight log analysis:")]),t._v(" "),r("img",{attrs:{src:e(502),alt:"drawing",width:"400"}})])}),[],!1,null,null,null);r.default=s.exports}}]);