(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{340:function(t,a,s){t.exports=s.p+"assets/img/y_mon.e98ca179.png"},341:function(t,a,s){t.exports=s.p+"assets/img/yukon_monitor.c39a470b.png"},342:function(t,a,s){t.exports=s.p+"assets/img/app_setup.d8b50db6.png"},680:function(t,a,s){t.exports=s.p+"assets/img/connection-sniffer.c1af39a6.png"},681:function(t,a,s){t.exports=s.p+"assets/img/uavcan_gui_tool.8ca435b5.png"},846:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-raccoonlab-can-sniffer-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-raccoonlab-can-sniffer-usage"}},[t._v("#")]),t._v(" 4. RaccoonLab CAN-Sniffer usage")]),t._v(" "),a("p",[t._v("Here is a comprehensive guide on how to use the RaccoonLab CAN-sniffer with different levels of applications. It starts from very basics and goes to the highest level of usage. Each section is independent, so you can skip what you don't need.")]),t._v(" "),a("p",[t._v("The guide is suitable for Linux and Windows (MacOS in process).")]),t._v(" "),a("h3",{attrs:{id:"_4-1-connection-example-diagram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-connection-example-diagram"}},[t._v("#")]),t._v(" 4.1. Connection example diagram")]),t._v(" "),a("p",[t._v("You have 2 options on how to connect a CAN-node to the RaccoonLab sniffer: UCANPHY Micro (JST-GH 4) and 6-pin Molex.")]),t._v(" "),a("p",[t._v("UCANPHY Micro is recommended for bench testing with low-power devices such as Mini v2 node without a load, airspeed, gnss, etc. This connection is simple and it delivers power to the device, so you don't need to use an external power source. An example of such connection is shown below:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(680),alt:"connection-sniffer",title:"connection-sniffer"}})]),t._v(" "),a("p",[t._v("Alternativelly, you can use 6-pin Molex. It doesn't deliver power from RaccoonLab sniffer (=PC) to the device. Please, check the hardware page for details.")]),t._v(" "),a("h3",{attrs:{id:"_4-2-low-level-pyserial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-low-level-pyserial"}},[t._v("#")]),t._v(" 4.2. Low level - pyserial")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Normally you don't need to use CAN-sniffer with pyserial. The following instructions may only be useful for low-level development or debugging. For details, please check "),a("a",{attrs:{href:"https://pyserial.readthedocs.io/en/latest/pyserial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pySerial docs"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("RaccoonLab CAN-Sniffer is a USB-CAN adapter, so you can interact with it via serial port.")]),t._v(" "),a("p",[t._v("At the beginning the RaccoonLab CAN-sniffer sends nothing. You have to initialize it with a sequence of commands: set speed and open channel.")]),t._v(" "),a("p",[t._v("Then you can send or receive CAN frames. The CAN-frame format is the following:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Start byte")]),t._v(" "),a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th",[t._v("Payload")]),t._v(" "),a("th",[t._v("End byte")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("0-8")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("'T'")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("'\\r'")])])])]),t._v(" "),a("p",[t._v('Example of CAN-frame: "T107D5614806000000010255BD\\r"')]),t._v(" "),a("p",[t._v("In the end it is expected to close the device by sending a specific command.")]),t._v(" "),a("p",[t._v("An example of code for Linux from "),a("a",{attrs:{href:"https://github.com/PonomarevDA/tools/blob/main/nodes/sniffer/pyserial.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("tools/nodes/sniffer/pyserial.py"),a("OutboundLink")],1),t._v(" is shown below (for Windows you just need to change "),a("code",[t._v("/dev/ttyACM0")]),t._v(" to "),a("code",[t._v("COM4")]),t._v(" or similar):")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serial\n\nCMD_EMPTY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\r'")]),t._v("\nCMD_CLOSE_CHANNEL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'C\\r'")]),t._v("\nCMD_SET_SPEED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'S8\\r'")]),t._v("\nCMD_OPEN_CHANNEL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'O\\r'")]),t._v("\nCMD_CLEAR_ERROR_FLAGS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'F\\r'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" serial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev/ttyACM0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    commands "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CMD_EMPTY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                CMD_CLOSE_CHANNEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                CMD_SET_SPEED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                CMD_OPEN_CHANNEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                CMD_CLEAR_ERROR_FLAGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cmd "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Skip wait for ACK part here for simplicity ")]),t._v("\n        ser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Send ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", recv: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    can_frame "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        byte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        can_frame "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" byte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" byte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" can_frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'T'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"recv CAN-frame: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("can_frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            can_frame "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\n    ser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CMD_CLOSE_CHANNEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The script opens a channel, receives and prints a few CAN frames, then closes the channel and exits.")]),t._v(" "),a("h3",{attrs:{id:"_4-3-middle-level-pythoncan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-middle-level-pythoncan"}},[t._v("#")]),t._v(" 4.3. Middle level - PythonCAN")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The notes below can be useful for raw CAN-bus debugging or when you use a device for custom CAN-protocol. If you are going to use RaccoonLab CAN-sniffer with Cyphal or DroneCAN, most probably you can skip this section as well and go to the next ones. For details, please check "),a("a",{attrs:{href:"https://python-can.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("python-can docs"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://python-can.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("python-can"),a("OutboundLink")],1),t._v(" library provides CAN support for Python. It supports different hardware devices.")]),t._v(" "),a("ul",[a("li",[t._v("With RacconLab CAN-sniffer we recommend using "),a("a",{attrs:{href:"https://python-can.readthedocs.io/en/stable/interfaces/slcan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("slcan ASCII protocol (CAN over Serial / SLCAN)"),a("OutboundLink")],1),t._v(". Since it directly uses a serial port, the interface works on both Linux and Windows. The disadvantage, though, is that this interface only support using a single process for the serial port.")]),t._v(" "),a("li",[t._v("For Ubuntu users, "),a("a",{attrs:{href:"https://python-can.readthedocs.io/en/stable/interfaces/socketcan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SocketCAN"),a("OutboundLink")],1),t._v(" can be a better alternative because it allows running multiple processes for a single interface. For example, you can run a few nodes, Yakut and Yukon simultaneously.")])]),t._v(" "),a("p",[t._v("An example of code for Linux from "),a("a",{attrs:{href:"https://github.com/PonomarevDA/tools/blob/main/nodes/sniffer/python_can_slcan.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("tools/nodes/sniffer/python_can_slcan.py"),a("OutboundLink")],1),t._v(" is shown below:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" can\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interface"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slcan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dev/ttyACM0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ttyBaudrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bitrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The script simply receives and prints a few CAN frames.")]),t._v(" "),a("h3",{attrs:{id:"_4-4-high-level-cyphal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-high-level-cyphal"}},[t._v("#")]),t._v(" 4.4 High level - Cyphal")]),t._v(" "),a("p",[t._v("There are a few tools to interact with Cyphal devices:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://pycyphal.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pycyphal"),a("OutboundLink")],1),t._v(" python package,")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenCyphal/yakut",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yakut"),a("OutboundLink")],1),t._v(" cli,")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenCyphal/yukon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yukon"),a("OutboundLink")],1),t._v(" gui.")])]),t._v(" "),a("p",[t._v("All of them are designed to work with different transport layers (CAN, UDP, serial) and different platforms (Linux, Windows, MacOS).")]),t._v(" "),a("p",[t._v("Let's prepare everything before working with Cyphal.")]),t._v(" "),a("p",[a("strong",[t._v("1. Preparation")])]),t._v(" "),a("p",[t._v("In general, you need to setup DSDL and transport config.")]),t._v(" "),a("p",[t._v("Although you can hardcode all configs in your pycyphal script in a similar way as we do with pyserial or pythonCAN, by the design it is recommended to move your DSDL and transport config to a separate script that sets the environment variables. This approach allows to easily reuse your application in different platforms and with different transport layers.")]),t._v(" "),a("p",[t._v("To start work with RaccoonLab CAN-sniffer, you need to configure the following environment variables:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Environment variable")]),t._v(" "),a("th",[t._v("Meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CYPHAL_PATH")]),t._v(" "),a("td",[t._v("Path to DSDL. Let's use the default:"),a("code",[t._v("$HOME/.cyphal")])])]),t._v(" "),a("tr",[a("td",[t._v("UAVCAN__NODE__ID")]),t._v(" "),a("td",[t._v("The application node identifier")])]),t._v(" "),a("tr",[a("td",[t._v("UAVCAN__CAN__IFACE")]),t._v(" "),a("td",[t._v("CAN iface name")])]),t._v(" "),a("tr",[a("td",[t._v("UAVCAN__CAN__BITRATE")]),t._v(" "),a("td",[t._v("Arbitration/data segment bits per second")])]),t._v(" "),a("tr",[a("td",[t._v("UAVCAN__CAN__MTU")]),t._v(" "),a("td",[t._v("Maximum transmission unit: 8 for classic CAN")])])])]),t._v(" "),a("ol",[a("li",[t._v("Let's clone public regulated data types into "),a("code",[t._v(".cyphal")]),t._v(" folder:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" ~/.cyphal\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/.cyphal\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/OpenCyphal/public_regulated_data_types.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Zubax/zubax_dsdl.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/DS-015/ds015.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Let's create a setup script:")])]),t._v(" "),a("p",[a("code",[t._v("setup.sh")]),t._v(" script for Linux (from "),a("a",{attrs:{href:"https://github.com/PonomarevDA/tools/blob/main/nodes/sniffer/setup.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("tools/nodes/sniffer/setup.sh"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CYPHAL_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.cyphal/zubax_dsdl:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v('/.cyphal/public_regulated_data_types/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UAVCAN__NODE__ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UAVCAN__CAN__IFACE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slcan:/dev/ttyACM0@1000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UAVCAN__CAN__BITRATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000000 1000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UAVCAN__CAN__MTU")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),a("p",[t._v("The same "),a("code",[t._v("setup.ps1")]),t._v(" script for Windows (from "),a("a",{attrs:{href:"https://gist.github.com/sainquake/7f06a2425ee54178633eac60f9002608",target:"_blank",rel:"noopener noreferrer"}},[t._v("sainquake/setup.ps1 gist"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":CYPHAL_PATH="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\workspace\\pycyphal\\demo\\public_regulated_data_types"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":UAVCAN__NODE__ID="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":UAVCAN__CAN__IFACE="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"slcan:COM7@1000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":UAVCAN__CAN__BITRATE="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000000 1000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(":UAVCAN__CAN__MTU="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Add MacOS example here...")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("(Optionally) Add the setup of these environment variables to "),a("code",[t._v("~/.bashrc")]),t._v(" on Linux or to the "),a("code",[t._v("Environment Variables")]),t._v(" on Windows")])]),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/OpenCyphal/yakut/main/docs/windows_environment_cyphal_path.png",alt:"drawing",width:"400"}}),t._v(" "),a("p",[a("strong",[t._v("2. Pycyphal")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more details, please check the "),a("a",{attrs:{href:"https://pycyphal.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pycyphal docs"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("You should always source the setup script before running a pycyphal script.")]),t._v(" "),a("p",[t._v("The simplest pycyphal script (from "),a("a",{attrs:{href:"https://github.com/PonomarevDA/tools/blob/main/nodes/sniffer/cyphal.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("tools/nodes/sniffer/cyphal.py"),a("OutboundLink")],1),t._v(") that just listen for heartbeat is shown below:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pycyphal\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pycyphal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Heartbeat_1_0\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    node_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetInfo_1_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Version_1_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("major"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"co.raccoonlab.example"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pycyphal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make_node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heartbeat_publisher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mode_1_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OPERATIONAL\n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    heartbeat_sub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("make_subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uavcan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Heartbeat_1_0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        transfer_from "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" heartbeat_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receive_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transfer_from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" transfer_from "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nasyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Another simple example tested on Windows: "),a("a",{attrs:{href:"https://gist.github.com/sainquake/3731e2057d590673b84ad74e113caa1e",target:"_blank",rel:"noopener noreferrer"}},[t._v("sainquake/py.py"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("3. Yakut CLI")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more details, please check the "),a("a",{attrs:{href:"https://github.com/OpenCyphal/yakut",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCyphal/yakut repository"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" yakut\n")])])]),a("p",[t._v("Run shell script and then yakut monitor")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" setup.sh\ny mon\n")])])]),a("p",[a("img",{attrs:{src:s(340),alt:"y_mon",title:"y_mon"}})]),t._v(" "),a("p",[t._v("Here you can see a basic online nodes information:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/7509.Heartbeat.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hertbeat"),a("OutboundLink")],1),t._v(" related things: id, mode, health, vssc, uptime")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/430.GetInfo.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetInfo"),a("OutboundLink")],1),t._v(" related things: protocol, hardware and software versions, UID, name")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/port/7510.List.1.0.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("port.List"),a("OutboundLink")],1),t._v(" related things: subjects published by this node, subjects that this node is subscribed to, RPC-services.")])]),t._v(" "),a("p",[t._v("You can request all existed parameters of the node with "),a("code",[t._v("y rl [OPTIONS] NODE_IDS")]),t._v(" command, for example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ y rl 20\n\n[example.integer, example.string, system.name, uavcan.node.description, uavcan.node.id, uavcan.pub.feedback.id, uavcan.pub.feedback.type, uavcan.sub.setpoint.id, uavcan.sub.setpoint.type]\n")])])]),a("p",[t._v("You can read or modify a register with command "),a("code",[t._v("y r NODE_IDS REGISTER_NAME [REGISTER_VALUE_ELEMENT]")]),t._v(". For example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ y r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" uavcan.node.id\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),a("p",[t._v("You can execute a command using "),a("a",{attrs:{href:"https://github.com/OpenCyphal/public_regulated_data_types/blob/master/uavcan/node/435.ExecuteCommand.1.1.dsdl",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExecuteCommand RPC-service"),a("OutboundLink")],1),t._v(" with command "),a("code",[t._v("y cmd [OPTIONS] NODE_IDS COMMAND [PARAMETER]")]),t._v(". For example, you can restart the node:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("y cmd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" restart "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n")])])]),a("p",[t._v("You can subscribe or publish a subject with "),a("code",[t._v("y sub [OPTIONS] [SUBJECT]")]),t._v(" and "),a("code",[t._v("y pub [OPTIONS] SUBJECT FIELDS [SUBJECT FIELDS]")]),t._v(".")]),t._v(" "),a("p",[t._v("For detaield usage examples and additional features of the yakut cli,\nplease type "),a("code",[t._v("y --help")]),t._v(" or refer to the "),a("a",{attrs:{href:"https://github.com/OpenCyphal/yakut",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCyphal/yakut docs"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("4. Yukon GUI")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Details: "),a("a",{attrs:{href:"https://github.com/OpenCyphal/yukon",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/OpenCyphal/yukon"),a("OutboundLink")],1),t._v(".\nWhile Yukon is usable, it is in the alpha stage and is known to contain bugs.")])]),t._v(" "),a("ol",[a("li",[t._v("Download the latest executable from "),a("a",{attrs:{href:"https://github.com/OpenCyphal/yukon/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCyphal/yukon/releases"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("chmod +x ./Downloads/Yukon-linux-x86_64")])]),t._v(" "),a("li",[t._v("Source the setup script")]),t._v(" "),a("li",[t._v("Execute "),a("code",[t._v("./Downloads/Yukon-linux-x86_64")])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(341),alt:"yukon_monitor",title:"yukon_monitor"}})]),t._v(" "),a("h3",{attrs:{id:"_4-5-high-level-dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-high-level-dronecan"}},[t._v("#")]),t._v(" 4.5 High level - DroneCAN")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("pydronecan is in process")])]),t._v(" "),a("p",[t._v("You can use "),a("a",{attrs:{href:"https://github.com/UAVCAN/gui_tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("gui_tool"),a("OutboundLink")],1),t._v(" for DroneCAN applications.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(342),alt:"app_setup",title:"app_setup"}})]),t._v(" "),a("p",[t._v("In the Application Setup menu you need to set "),a("code",[t._v("1000000")]),t._v(" to both can bus and adapter baud rates.")]),t._v(" "),a("p",[t._v("After that you will get following window:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(681),alt:"gui_tool",title:"gui_tool"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);