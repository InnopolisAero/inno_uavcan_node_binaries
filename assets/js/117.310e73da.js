(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{810:function(t,e,s){"use strict";s.r(e);var a=s(25),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_9-black-box-testing-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-black-box-testing-guide"}},[t._v("#")]),t._v(" 9. Black-box testing guide")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This is a black-box testing instructions, so it doesn't include neither unit nor integration tests.")]),t._v(" "),e("p",[t._v("At the moment it is expected to manually execute all of the tests, but it should be iteratively automated soon.")]),t._v(" "),e("p",[t._v("Each release binary should be thoroughly tested according to this pipeline to ensure the device's functionality, performance, and reliability.")])]),t._v(" "),e("h2",{attrs:{id:"part-1-simple-check-that-the-released-binary-version-is-correct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-1-simple-check-that-the-released-binary-version-is-correct"}},[t._v("#")]),t._v(" Part 1. Simple check that the released binary version is correct")]),t._v(" "),e("h3",{attrs:{id:"test-case-1-1-normal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-1-1-normal"}},[t._v("#")]),t._v(" Test case 1-1. Normal")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("There is a risk that the uploaded binary is wrong (wrong build flag, another node, previous version, etc).")]),t._v(" "),e("p",[t._v("This test case is intented just to find it out.")])]),t._v(" "),e("ul",[e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("check the following properties using Yakut or Yukon:\n"),e("ul",[e("li",[t._v("node name")]),t._v(" "),e("li",[t._v("software version")]),t._v(" "),e("li",[t._v("hardware version")]),t._v(" "),e("li",[t._v("vssc")]),t._v(" "),e("li",[t._v("etc")])])])]),t._v(" "),e("h2",{attrs:{id:"part-2-compatibility-migration-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-2-compatibility-migration-tests"}},[t._v("#")]),t._v(" Part 2. Compatibility/Migration Tests")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("After uploading a new software, the registers values can be changed.")]),t._v(" "),e("p",[t._v("Pay attention on safety critical registers.")]),t._v(" "),e("p",[t._v("For example, mini v2 should not have def value != 1000, because it will trigger the motor to spin!")])]),t._v(" "),e("h3",{attrs:{id:"test-case-2-1-migration-drom-dronecan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-2-1-migration-drom-dronecan"}},[t._v("#")]),t._v(" Test case 2-1. Migration drom DroneCAN")]),t._v(" "),e("ul",[e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("upload the latest dronecan firmware")]),t._v(" "),e("li",[t._v("check the node is online")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("check the node is online and nothing is broken")])]),t._v(" "),e("h3",{attrs:{id:"test-case-2-2-update-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-2-2-update-version"}},[t._v("#")]),t._v(" Test case 2-2. Update version")]),t._v(" "),e("ul",[e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("upload the previous cyphal version")]),t._v(" "),e("li",[t._v("check the node is online")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("check the node is online and nothing is broken")])]),t._v(" "),e("h2",{attrs:{id:"part-3-configuration-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-3-configuration-tests"}},[t._v("#")]),t._v(" Part 3. Configuration Tests")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("There are 6 possible states:")]),t._v(" "),e("ul",[e("li",[t._v("Ublox can be either configured or not.")]),t._v(" "),e("li",[t._v("gps.config can be in default (0), force config (1) or done (2) states")])])]),t._v(" "),e("p",[t._v("Provide tests for the most valuable states in the following sequence:")]),t._v(" "),e("h3",{attrs:{id:"test-case-3-1-factory-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-3-1-factory-state"}},[t._v("#")]),t._v(" Test case 3-1. Factory state")]),t._v(" "),e("ul",[e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("reset ublox using UART to the default, save the config and reboot it")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("wait for the configuration to succeed")])]),t._v(" "),e("h3",{attrs:{id:"test-case-3-2-working-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-3-2-working-state"}},[t._v("#")]),t._v(" Test case 3-2. Working state")]),t._v(" "),e("ul",[e("li",[t._v("reboot the node")]),t._v(" "),e("li",[t._v("it should automatically detect that the ublox is configured and skip the config process (the LED should blink purple, then blue and green)")])]),t._v(" "),e("h3",{attrs:{id:"test-case-3-3-force-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-3-3-force-config"}},[t._v("#")]),t._v(" Test case 3-3. Force config")]),t._v(" "),e("ul",[e("li",[t._v("reboot the node")]),t._v(" "),e("li",[t._v("it should automatically detect that the ublox is configured and skip the config process (the LED should blink purple, then blue and green)")])]),t._v(" "),e("h2",{attrs:{id:"part-4-functional-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-4-functional-testing"}},[t._v("#")]),t._v(" Part 4. Functional Testing")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Basic checks that the node interface matches the one declared in the documentation.")])]),t._v(" "),e("h3",{attrs:{id:"test-case-4-1-gnss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-4-1-gnss"}},[t._v("#")]),t._v(" Test case 4-1. GNSS")]),t._v(" "),e("ul",[e("li",[t._v("Subscribe on all required topics:\n"),e("ul",[e("li",[t._v("zubax.gps.sats")]),t._v(" "),e("li",[t._v("zubax.gps.point")]),t._v(" "),e("li",[t._v("zubax.gps.yaw")]),t._v(" "),e("li",[t._v("zubax.gps.status")]),t._v(" "),e("li",[t._v("ds015.gps.*")])])]),t._v(" "),e("li",[t._v("Verify that the GNSS provides accurate position and timing information under different conditions")])]),t._v(" "),e("h3",{attrs:{id:"test-case-4-2-magnetometer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-4-2-magnetometer"}},[t._v("#")]),t._v(" Test case 4-2. Magnetometer")]),t._v(" "),e("ul",[e("li",[t._v("Subscribe on all required topics\n"),e("ul",[e("li",[t._v("zubax.mag")])])]),t._v(" "),e("li",[t._v("Test the magnetometer by verifying its accuracy in determining direction and orientation")])]),t._v(" "),e("h3",{attrs:{id:"test-case-4-3-barometer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-4-3-barometer"}},[t._v("#")]),t._v(" Test case 4-3. Barometer")]),t._v(" "),e("ul",[e("li",[t._v("Subscribe on all required topics\n"),e("ul",[e("li",[t._v("zubax.baro.press")]),t._v(" "),e("li",[t._v("zubax.baro.temp")])])]),t._v(" "),e("li",[t._v("Check the barometer's ability to measure changes in altitude and atmospheric pressure accurately")])]),t._v(" "),e("h2",{attrs:{id:"part-5-faults-self-diagnostic-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-5-faults-self-diagnostic-testing"}},[t._v("#")]),t._v(" Part 5. Faults (self-diagnostic) Testing")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Essential feature that helps to detect a hardware issue before shipping the device.")])]),t._v(" "),e("h3",{attrs:{id:"test-case-5-1-gnss-hardware-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-5-1-gnss-hardware-issue"}},[t._v("#")]),t._v(" Test case 5-1. GNSS Hardware Issue")]),t._v(" "),e("ul",[e("li",[t._v("get the device with known GNSS hardware issue")]),t._v(" "),e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("it should be complitely clear for a user that the device has a hardware issue")])]),t._v(" "),e("h3",{attrs:{id:"test-case-5-2-magnetometer-hardware-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-5-2-magnetometer-hardware-issue"}},[t._v("#")]),t._v(" Test case 5-2. Magnetometer Hardware Issue")]),t._v(" "),e("ul",[e("li",[t._v("get the device with known Magnetometer hardware issue")]),t._v(" "),e("li",[t._v("erase chip memory (it's like a factory reset)")]),t._v(" "),e("li",[t._v("upload the latest firmware to the node")]),t._v(" "),e("li",[t._v("it should be complitely clear for a user that the device has a hardware issue")])]),t._v(" "),e("h3",{attrs:{id:"test-case-5-3-barometer-hardware-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-5-3-barometer-hardware-issue"}},[t._v("#")]),t._v(" Test case 5-3. Barometer Hardware Issue")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Well, we never had such an issue.")]),t._v(" "),e("p",[t._v("Can we unsold the baro?")])]),t._v(" "),e("h2",{attrs:{id:"part-6-performance-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-6-performance-testing"}},[t._v("#")]),t._v(" Part 6. Performance Testing")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("All topics should be enabled.")])]),t._v(" "),e("h3",{attrs:{id:"test-case-6-1-gnss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-6-1-gnss"}},[t._v("#")]),t._v(" Test case 6-1. GNSS")]),t._v(" "),e("ul",[e("li",[t._v("Check topics publish rate. The node should publish all data almost at once with 10 Hz")])]),t._v(" "),e("h3",{attrs:{id:"test-case-6-2-magnetometer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-6-2-magnetometer"}},[t._v("#")]),t._v(" Test case 6-2. Magnetometer")]),t._v(" "),e("ul",[e("li",[t._v("Check topics publish rate. The node should publish data with 75 Hz")])]),t._v(" "),e("h3",{attrs:{id:"test-case-6-3-barometer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-6-3-barometer"}},[t._v("#")]),t._v(" Test case 6-3. Barometer")]),t._v(" "),e("ul",[e("li",[t._v("Check topics publish rate. The node should publish data with ??? Hz")])]),t._v(" "),e("h2",{attrs:{id:"part-7-power-consumption-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-7-power-consumption-testing"}},[t._v("#")]),t._v(" Part 7. Power Consumption Testing")]),t._v(" "),e("ul",[e("li",[t._v("Verify the device's power consumption in different operating modes to ensure it meets power requirements")])]),t._v(" "),e("h2",{attrs:{id:"part-8-user-interface-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-8-user-interface-testing"}},[t._v("#")]),t._v(" Part 8. User Interface Testing")]),t._v(" "),e("h3",{attrs:{id:"test-case-9-1-yakut"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-9-1-yakut"}},[t._v("#")]),t._v(" Test case 9-1. Yakut")]),t._v(" "),e("ul",[e("li",[t._v("is it easy to setup everything and subscribe on everything?")]),t._v(" "),e("li",[t._v("is docs clear?")])]),t._v(" "),e("h3",{attrs:{id:"test-case-9-2-yukon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-case-9-2-yukon"}},[t._v("#")]),t._v(" Test case 9-2. Yukon")]),t._v(" "),e("ul",[e("li",[t._v("is it easy to setup everything and subscribe on everything?")]),t._v(" "),e("li",[t._v("is docs clear?")])]),t._v(" "),e("h2",{attrs:{id:"part-9-usability-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-9-usability-testing"}},[t._v("#")]),t._v(" Part 9. Usability Testing")]),t._v(" "),e("ul",[e("li",[t._v("Evaluate the overall usability and user experience of the device, considering the integration of sensor data and user interaction.")])]),t._v(" "),e("h2",{attrs:{id:"part-10-regression-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-10-regression-testing"}},[t._v("#")]),t._v(" Part 10. Regression Testing")]),t._v(" "),e("ul",[e("li",[t._v("We should keep all previous issues here")]),t._v(" "),e("li",[t._v("Ensure that previous issues have been resolved and that new releases do not reintroduce previously fixed bugs")])]),t._v(" "),e("h2",{attrs:{id:"part-11-specification-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-11-specification-check"}},[t._v("#")]),t._v(" Part 11. Specification check")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("A script that checks if the node conforms to the specification standard will be uploaded here soon.")])]),t._v(" "),e("h2",{attrs:{id:"part-12-environmental-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-12-environmental-testing"}},[t._v("#")]),t._v(" Part 12. Environmental Testing")]),t._v(" "),e("ul",[e("li",[t._v("temperature conditions,")]),t._v(" "),e("li",[t._v("etc.")])]),t._v(" "),e("h2",{attrs:{id:"part-13-endurance-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-13-endurance-testing"}},[t._v("#")]),t._v(" Part 13. Endurance testing")]),t._v(" "),e("p",[t._v("Bring up together multiple of devices and run them for a few days.")]),t._v(" "),e("p",[t._v("One group of the devices should be powered from CAN JST-4 pin 5V.")]),t._v(" "),e("p",[t._v("Another group of the devices should be powered up from CAN Molex-6 pin higher voltage (30 or 60V ?).")])])}),[],!1,null,null,null);e.default=i.exports}}]);