/*
 * Input event codes from linux/input-event-codes.h
 *
 * Copyright (c) 1999-2002 Vojtech Pavlik
 * Copyright (c) 2015 Hans de Goede <hdegoede@redhat.com>
 * Copyright (c) 2016 Zeno Zeng <zenoofzeng@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published by
 * the Free Software Foundation.
 */

const codes = {} as any

/*
 * Device properties and quirks
 */

codes.INPUT_PROP_POINTER = 0x00	/* needs a pointer */
codes.INPUT_PROP_DIRECT = 0x01	/* direct input devices */
codes.INPUT_PROP_BUTTONPAD = 0x02	/* has button(s) under pad */
codes.INPUT_PROP_SEMI_MT = 0x03	/* touch rectangle only */
codes.INPUT_PROP_TOPBUTTONPAD = 0x04	/* softbuttons at top of pad */
codes.INPUT_PROP_POINTING_STICK = 0x05	/* is a pointing stick */
codes.INPUT_PROP_ACCELEROMETER = 0x06	/* has accelerometer */

codes.INPUT_PROP_MAX = 0x1f
codes.INPUT_PROP_CNT = (codes.INPUT_PROP_MAX + 1)

/*
 * Event types
 */

codes.EV_SYN = 0x00
codes.EV_KEY = 0x01
codes.EV_REL = 0x02
codes.EV_ABS = 0x03
codes.EV_MSC = 0x04
codes.EV_SW = 0x05
codes.EV_LED = 0x11
codes.EV_SND = 0x12
codes.EV_REP = 0x14
codes.EV_FF = 0x15
codes.EV_PWR = 0x16
codes.EV_FF_STATUS = 0x17
codes.EV_MAX = 0x1f
codes.EV_CNT = (codes.EV_MAX+1)

/*
 * Synchronization events.
 */

codes.SYN_REPORT = 0
codes.SYN_CONFIG = 1
codes.SYN_MT_REPORT = 2
codes.SYN_DROPPED = 3
codes.SYN_MAX = 0xf
codes.SYN_CNT = (codes.SYN_MAX+1)

/*
 * Keys and buttons
 *
 * Most of the keys/buttons are modeled after USB HUT 1.12
 * (see http://www.usb.org/developers/hidpage).
 * Abbreviations in the comments:
 * AC - Application Control
 * AL - Application Launch Button
 * SC - System Control
 */

codes.KEY_RESERVED = 0
codes.KEY_ESC = 1
codes.KEY_1 = 2
codes.KEY_2 = 3
codes.KEY_3 = 4
codes.KEY_4 = 5
codes.KEY_5 = 6
codes.KEY_6 = 7
codes.KEY_7 = 8
codes.KEY_8 = 9
codes.KEY_9 = 10
codes.KEY_0 = 11
codes.KEY_MINUS = 12
codes.KEY_EQUAL = 13
codes.KEY_BACKSPACE = 14
codes.KEY_TAB = 15
codes.KEY_Q = 16
codes.KEY_W = 17
codes.KEY_E = 18
codes.KEY_R = 19
codes.KEY_T = 20
codes.KEY_Y = 21
codes.KEY_U = 22
codes.KEY_I = 23
codes.KEY_O = 24
codes.KEY_P = 25
codes.KEY_LEFTBRACE = 26
codes.KEY_RIGHTBRACE = 27
codes.KEY_ENTER = 28
codes.KEY_LEFTCTRL = 29
codes.KEY_A = 30
codes.KEY_S = 31
codes.KEY_D = 32
codes.KEY_F = 33
codes.KEY_G = 34
codes.KEY_H = 35
codes.KEY_J = 36
codes.KEY_K = 37
codes.KEY_L = 38
codes.KEY_SEMICOLON = 39
codes.KEY_APOSTROPHE = 40
codes.KEY_GRAVE = 41
codes.KEY_LEFTSHIFT = 42
codes.KEY_BACKSLASH = 43
codes.KEY_Z = 44
codes.KEY_X = 45
codes.KEY_C = 46
codes.KEY_V = 47
codes.KEY_B = 48
codes.KEY_N = 49
codes.KEY_M = 50
codes.KEY_COMMA = 51
codes.KEY_DOT = 52
codes.KEY_SLASH = 53
codes.KEY_RIGHTSHIFT = 54
codes.KEY_KPASTERISK = 55
codes.KEY_LEFTALT = 56
codes.KEY_SPACE = 57
codes.KEY_CAPSLOCK = 58
codes.KEY_F1 = 59
codes.KEY_F2 = 60
codes.KEY_F3 = 61
codes.KEY_F4 = 62
codes.KEY_F5 = 63
codes.KEY_F6 = 64
codes.KEY_F7 = 65
codes.KEY_F8 = 66
codes.KEY_F9 = 67
codes.KEY_F10 = 68
codes.KEY_NUMLOCK = 69
codes.KEY_SCROLLLOCK = 70
codes.KEY_KP7 = 71
codes.KEY_KP8 = 72
codes.KEY_KP9 = 73
codes.KEY_KPMINUS = 74
codes.KEY_KP4 = 75
codes.KEY_KP5 = 76
codes.KEY_KP6 = 77
codes.KEY_KPPLUS = 78
codes.KEY_KP1 = 79
codes.KEY_KP2 = 80
codes.KEY_KP3 = 81
codes.KEY_KP0 = 82
codes.KEY_KPDOT = 83

codes.KEY_ZENKAKUHANKAKU = 85
codes.KEY_102ND = 86
codes.KEY_F11 = 87
codes.KEY_F12 = 88
codes.KEY_RO = 89
codes.KEY_KATAKANA = 90
codes.KEY_HIRAGANA = 91
codes.KEY_HENKAN = 92
codes.KEY_KATAKANAHIRAGANA = 93
codes.KEY_MUHENKAN = 94
codes.KEY_KPJPCOMMA = 95
codes.KEY_KPENTER = 96
codes.KEY_RIGHTCTRL = 97
codes.KEY_KPSLASH = 98
codes.KEY_SYSRQ = 99
codes.KEY_RIGHTALT = 100
codes.KEY_LINEFEED = 101
codes.KEY_HOME = 102
codes.KEY_UP = 103
codes.KEY_PAGEUP = 104
codes.KEY_LEFT = 105
codes.KEY_RIGHT = 106
codes.KEY_END = 107
codes.KEY_DOWN = 108
codes.KEY_PAGEDOWN = 109
codes.KEY_INSERT = 110
codes.KEY_DELETE = 111
codes.KEY_MACRO = 112
codes.KEY_MUTE = 113
codes.KEY_VOLUMEDOWN = 114
codes.KEY_VOLUMEUP = 115
codes.KEY_POWER = 116	/* SC System Power Down */
codes.KEY_KPEQUAL = 117
codes.KEY_KPPLUSMINUS = 118
codes.KEY_PAUSE = 119
codes.KEY_SCALE = 120	/* AL Compiz Scale (Expose) */

codes.KEY_KPCOMMA = 121
codes.KEY_HANGEUL = 122
codes.KEY_HANGUEL = codes.KEY_HANGEUL
codes.KEY_HANJA = 123
codes.KEY_YEN = 124
codes.KEY_LEFTMETA = 125
codes.KEY_RIGHTMETA = 126
codes.KEY_COMPOSE = 127

codes.KEY_STOP = 128	/* AC Stop */
codes.KEY_AGAIN = 129
codes.KEY_PROPS = 130	/* AC Properties */
codes.KEY_UNDO = 131	/* AC Undo */
codes.KEY_FRONT = 132
codes.KEY_COPY = 133	/* AC Copy */
codes.KEY_OPEN = 134	/* AC Open */
codes.KEY_PASTE = 135	/* AC Paste */
codes.KEY_FIND = 136	/* AC Search */
codes.KEY_CUT = 137	/* AC Cut */
codes.KEY_HELP = 138	/* AL Integrated Help Center */
codes.KEY_MENU = 139	/* Menu (show menu) */
codes.KEY_CALC = 140	/* AL Calculator */
codes.KEY_SETUP = 141
codes.KEY_SLEEP = 142	/* SC System Sleep */
codes.KEY_WAKEUP = 143	/* System Wake Up */
codes.KEY_FILE = 144	/* AL Local Machine Browser */
codes.KEY_SENDFILE = 145
codes.KEY_DELETEFILE = 146
codes.KEY_XFER = 147
codes.KEY_PROG1 = 148
codes.KEY_PROG2 = 149
codes.KEY_WWW = 150	/* AL Internet Browser */
codes.KEY_MSDOS = 151
codes.KEY_COFFEE = 152	/* AL Terminal Lock/Screensaver */
codes.KEY_SCREENLOCK = codes.KEY_COFFEE
codes.KEY_ROTATE_DISPLAY = 153	/* Display orientation for e.g. tablets */
codes.KEY_DIRECTION = codes.KEY_ROTATE_DISPLAY
codes.KEY_CYCLEWINDOWS = 154
codes.KEY_MAIL = 155
codes.KEY_BOOKMARKS = 156	/* AC Bookmarks */
codes.KEY_COMPUTER = 157
codes.KEY_BACK = 158	/* AC Back */
codes.KEY_FORWARD = 159	/* AC Forward */
codes.KEY_CLOSECD = 160
codes.KEY_EJECTCD = 161
codes.KEY_EJECTCLOSECD = 162
codes.KEY_NEXTSONG = 163
codes.KEY_PLAYPAUSE = 164
codes.KEY_PREVIOUSSONG = 165
codes.KEY_STOPCD = 166
codes.KEY_RECORD = 167
codes.KEY_REWIND = 168
codes.KEY_PHONE = 169	/* Media Select Telephone */
codes.KEY_ISO = 170
codes.KEY_CONFIG = 171	/* AL Consumer Control Configuration */
codes.KEY_HOMEPAGE = 172	/* AC Home */
codes.KEY_REFRESH = 173	/* AC Refresh */
codes.KEY_EXIT = 174	/* AC Exit */
codes.KEY_MOVE = 175
codes.KEY_EDIT = 176
codes.KEY_SCROLLUP = 177
codes.KEY_SCROLLDOWN = 178
codes.KEY_KPLEFTPAREN = 179
codes.KEY_KPRIGHTPAREN = 180
codes.KEY_NEW = 181	/* AC New */
codes.KEY_REDO = 182	/* AC Redo/Repeat */

codes.KEY_F13 = 183
codes.KEY_F14 = 184
codes.KEY_F15 = 185
codes.KEY_F16 = 186
codes.KEY_F17 = 187
codes.KEY_F18 = 188
codes.KEY_F19 = 189
codes.KEY_F20 = 190
codes.KEY_F21 = 191
codes.KEY_F22 = 192
codes.KEY_F23 = 193
codes.KEY_F24 = 194

codes.KEY_PLAYCD = 200
codes.KEY_PAUSECD = 201
codes.KEY_PROG3 = 202
codes.KEY_PROG4 = 203
codes.KEY_DASHBOARD = 204	/* AL Dashboard */
codes.KEY_SUSPEND = 205
codes.KEY_CLOSE = 206	/* AC Close */
codes.KEY_PLAY = 207
codes.KEY_FASTFORWARD = 208
codes.KEY_BASSBOOST = 209
codes.KEY_PRINT = 210	/* AC Print */
codes.KEY_HP = 211
codes.KEY_CAMERA = 212
codes.KEY_SOUND = 213
codes.KEY_QUESTION = 214
codes.KEY_EMAIL = 215
codes.KEY_CHAT = 216
codes.KEY_SEARCH = 217
codes.KEY_CONNECT = 218
codes.KEY_FINANCE = 219	/* AL Checkbook/Finance */
codes.KEY_SPORT = 220
codes.KEY_SHOP = 221
codes.KEY_ALTERASE = 222
codes.KEY_CANCEL = 223	/* AC Cancel */
codes.KEY_BRIGHTNESSDOWN = 224
codes.KEY_BRIGHTNESSUP = 225
codes.KEY_MEDIA = 226

codes.KEY_SWITCHVIDEOMODE = 227	/* Cycle between available video
 =    outputs (Monitor/LCD/TV-out/etc) */
codes.KEY_KBDILLUMTOGGLE = 228
codes.KEY_KBDILLUMDOWN = 229
codes.KEY_KBDILLUMUP = 230

codes.KEY_SEND = 231	/* AC Send */
codes.KEY_REPLY = 232	/* AC Reply */
codes.KEY_FORWARDMAIL = 233	/* AC Forward Msg */
codes.KEY_SAVE = 234	/* AC Save */
codes.KEY_DOCUMENTS = 235

codes.KEY_BATTERY = 236

codes.KEY_BLUETOOTH = 237
codes.KEY_WLAN = 238
codes.KEY_UWB = 239

codes.KEY_UNKNOWN = 240

codes.KEY_VIDEO_NEXT = 241	/* drive next video source */
codes.KEY_VIDEO_PREV = 242	/* drive previous video source */
codes.KEY_BRIGHTNESS_CYCLE = 243	/* brightness up, after max is min */
codes.KEY_BRIGHTNESS_AUTO = 244	/* Set Auto Brightness: manual
 =   brightness control is off,
 =   rely on ambient */
codes.KEY_BRIGHTNESS_ZERO = codes.KEY_BRIGHTNESS_AUTO
codes.KEY_DISPLAY_OFF = 245	/* display device to off state */

codes.KEY_WWAN = 246	/* Wireless WAN (LTE, UMTS, GSM, etc.) */
codes.KEY_WIMAX = codes.KEY_WWAN
codes.KEY_RFKILL = 247	/* Key that controls all radios */

codes.KEY_MICMUTE = 248	/* Mute / unmute the microphone */

/* Code 255 is reserved for special needs of AT keyboard driver */

codes.BTN_MISC = 0x100
codes.BTN_0 = 0x100
codes.BTN_1 = 0x101
codes.BTN_2 = 0x102
codes.BTN_3 = 0x103
codes.BTN_4 = 0x104
codes.BTN_5 = 0x105
codes.BTN_6 = 0x106
codes.BTN_7 = 0x107
codes.BTN_8 = 0x108
codes.BTN_9 = 0x109

codes.BTN_MOUSE = 0x110
codes.BTN_LEFT = 0x110
codes.BTN_RIGHT = 0x111
codes.BTN_MIDDLE = 0x112
codes.BTN_SIDE = 0x113
codes.BTN_EXTRA = 0x114
codes.BTN_FORWARD = 0x115
codes.BTN_BACK = 0x116
codes.BTN_TASK = 0x117

codes.BTN_JOYSTICK = 0x120
codes.BTN_TRIGGER = 0x120
codes.BTN_THUMB = 0x121
codes.BTN_THUMB2 = 0x122
codes.BTN_TOP = 0x123
codes.BTN_TOP2 = 0x124
codes.BTN_PINKIE = 0x125
codes.BTN_BASE = 0x126
codes.BTN_BASE2 = 0x127
codes.BTN_BASE3 = 0x128
codes.BTN_BASE4 = 0x129
codes.BTN_BASE5 = 0x12a
codes.BTN_BASE6 = 0x12b
codes.BTN_DEAD = 0x12f

codes.BTN_GAMEPAD = 0x130
codes.BTN_SOUTH = 0x130
codes.BTN_A = codes.BTN_SOUTH
codes.BTN_EAST = 0x131
codes.BTN_B = codes.BTN_EAST
codes.BTN_C = 0x132
codes.BTN_NORTH = 0x133
codes.BTN_X = codes.BTN_NORTH
codes.BTN_WEST = 0x134
codes.BTN_Y = codes.BTN_WEST
codes.BTN_Z = 0x135
codes.BTN_TL = 0x136
codes.BTN_TR = 0x137
codes.BTN_TL2 = 0x138
codes.BTN_TR2 = 0x139
codes.BTN_SELECT = 0x13a
codes.BTN_START = 0x13b
codes.BTN_MODE = 0x13c
codes.BTN_THUMBL = 0x13d
codes.BTN_THUMBR = 0x13e

codes.BTN_DIGI = 0x140
codes.BTN_TOOL_PEN = 0x140
codes.BTN_TOOL_RUBBER = 0x141
codes.BTN_TOOL_BRUSH = 0x142
codes.BTN_TOOL_PENCIL = 0x143
codes.BTN_TOOL_AIRBRUSH = 0x144
codes.BTN_TOOL_FINGER = 0x145
codes.BTN_TOOL_MOUSE = 0x146
codes.BTN_TOOL_LENS = 0x147
codes.BTN_TOOL_QUINTTAP = 0x148	/* Five fingers on trackpad */
codes.BTN_TOUCH = 0x14a
codes.BTN_STYLUS = 0x14b
codes.BTN_STYLUS2 = 0x14c
codes.BTN_TOOL_DOUBLETAP = 0x14d
codes.BTN_TOOL_TRIPLETAP = 0x14e
codes.BTN_TOOL_QUADTAP = 0x14f	/* Four fingers on trackpad */

codes.BTN_WHEEL = 0x150
codes.BTN_GEAR_DOWN = 0x150
codes.BTN_GEAR_UP = 0x151

codes.KEY_OK = 0x160
codes.KEY_SELECT = 0x161
codes.KEY_GOTO = 0x162
codes.KEY_CLEAR = 0x163
codes.KEY_POWER2 = 0x164
codes.KEY_OPTION = 0x165
codes.KEY_INFO = 0x166	/* AL OEM Features/Tips/Tutorial */
codes.KEY_TIME = 0x167
codes.KEY_VENDOR = 0x168
codes.KEY_ARCHIVE = 0x169
codes.KEY_PROGRAM = 0x16a	/* Media Select Program Guide */
codes.KEY_CHANNEL = 0x16b
codes.KEY_FAVORITES = 0x16c
codes.KEY_EPG = 0x16d
codes.KEY_PVR = 0x16e	/* Media Select Home */
codes.KEY_MHP = 0x16f
codes.KEY_LANGUAGE = 0x170
codes.KEY_TITLE = 0x171
codes.KEY_SUBTITLE = 0x172
codes.KEY_ANGLE = 0x173
codes.KEY_ZOOM = 0x174
codes.KEY_MODE = 0x175
codes.KEY_KEYBOARD = 0x176
codes.KEY_SCREEN = 0x177
codes.KEY_PC = 0x178	/* Media Select Computer */
codes.KEY_TV = 0x179	/* Media Select TV */
codes.KEY_TV2 = 0x17a	/* Media Select Cable */
codes.KEY_VCR = 0x17b	/* Media Select VCR */
codes.KEY_VCR2 = 0x17c	/* VCR Plus */
codes.KEY_SAT = 0x17d	/* Media Select Satellite */
codes.KEY_SAT2 = 0x17e
codes.KEY_CD = 0x17f	/* Media Select CD */
codes.KEY_TAPE = 0x180	/* Media Select Tape */
codes.KEY_RADIO = 0x181
codes.KEY_TUNER = 0x182	/* Media Select Tuner */
codes.KEY_PLAYER = 0x183
codes.KEY_TEXT = 0x184
codes.KEY_DVD = 0x185	/* Media Select DVD */
codes.KEY_AUX = 0x186
codes.KEY_MP3 = 0x187
codes.KEY_AUDIO = 0x188	/* AL Audio Browser */
codes.KEY_VIDEO = 0x189	/* AL Movie Browser */
codes.KEY_DIRECTORY = 0x18a
codes.KEY_LIST = 0x18b
codes.KEY_MEMO = 0x18c	/* Media Select Messages */
codes.KEY_CALENDAR = 0x18d
codes.KEY_RED = 0x18e
codes.KEY_GREEN = 0x18f
codes.KEY_YELLOW = 0x190
codes.KEY_BLUE = 0x191
codes.KEY_CHANNELUP = 0x192	/* Channel Increment */
codes.KEY_CHANNELDOWN = 0x193	/* Channel Decrement */
codes.KEY_FIRST = 0x194
codes.KEY_LAST = 0x195	/* Recall Last */
codes.KEY_AB = 0x196
codes.KEY_NEXT = 0x197
codes.KEY_RESTART = 0x198
codes.KEY_SLOW = 0x199
codes.KEY_SHUFFLE = 0x19a
codes.KEY_BREAK = 0x19b
codes.KEY_PREVIOUS = 0x19c
codes.KEY_DIGITS = 0x19d
codes.KEY_TEEN = 0x19e
codes.KEY_TWEN = 0x19f
codes.KEY_VIDEOPHONE = 0x1a0	/* Media Select Video Phone */
codes.KEY_GAMES = 0x1a1	/* Media Select Games */
codes.KEY_ZOOMIN = 0x1a2	/* AC Zoom In */
codes.KEY_ZOOMOUT = 0x1a3	/* AC Zoom Out */
codes.KEY_ZOOMRESET = 0x1a4	/* AC Zoom */
codes.KEY_WORDPROCESSOR = 0x1a5	/* AL Word Processor */
codes.KEY_EDITOR = 0x1a6	/* AL Text Editor */
codes.KEY_SPREADSHEET = 0x1a7	/* AL Spreadsheet */
codes.KEY_GRAPHICSEDITOR = 0x1a8	/* AL Graphics Editor */
codes.KEY_PRESENTATION = 0x1a9	/* AL Presentation App */
codes.KEY_DATABASE = 0x1aa	/* AL Database App */
codes.KEY_NEWS = 0x1ab	/* AL Newsreader */
codes.KEY_VOICEMAIL = 0x1ac	/* AL Voicemail */
codes.KEY_ADDRESSBOOK = 0x1ad	/* AL Contacts/Address Book */
codes.KEY_MESSENGER = 0x1ae	/* AL Instant Messaging */
codes.KEY_DISPLAYTOGGLE = 0x1af	/* Turn display (LCD) on and off */
codes.KEY_BRIGHTNESS_TOGGLE = codes.KEY_DISPLAYTOGGLE
codes.KEY_SPELLCHECK = 0x1b0   /* AL Spell Check */
codes.KEY_LOGOFF = 0x1b1   /* AL Logoff */

codes.KEY_DOLLAR = 0x1b2
codes.KEY_EURO = 0x1b3

codes.KEY_FRAMEBACK = 0x1b4	/* Consumer - transport controls */
codes.KEY_FRAMEFORWARD = 0x1b5
codes.KEY_CONTEXT_MENU = 0x1b6	/* GenDesc - system context menu */
codes.KEY_MEDIA_REPEAT = 0x1b7	/* Consumer - transport control */
codes.KEY_10CHANNELSUP = 0x1b8	/* 10 channels up (10+) */
codes.KEY_10CHANNELSDOWN = 0x1b9	/* 10 channels down (10-) */
codes.KEY_IMAGES = 0x1ba	/* AL Image Browser */

codes.KEY_DEL_EOL = 0x1c0
codes.KEY_DEL_EOS = 0x1c1
codes.KEY_INS_LINE = 0x1c2
codes.KEY_DEL_LINE = 0x1c3

codes.KEY_FN = 0x1d0
codes.KEY_FN_ESC = 0x1d1
codes.KEY_FN_F1 = 0x1d2
codes.KEY_FN_F2 = 0x1d3
codes.KEY_FN_F3 = 0x1d4
codes.KEY_FN_F4 = 0x1d5
codes.KEY_FN_F5 = 0x1d6
codes.KEY_FN_F6 = 0x1d7
codes.KEY_FN_F7 = 0x1d8
codes.KEY_FN_F8 = 0x1d9
codes.KEY_FN_F9 = 0x1da
codes.KEY_FN_F10 = 0x1db
codes.KEY_FN_F11 = 0x1dc
codes.KEY_FN_F12 = 0x1dd
codes.KEY_FN_1 = 0x1de
codes.KEY_FN_2 = 0x1df
codes.KEY_FN_D = 0x1e0
codes.KEY_FN_E = 0x1e1
codes.KEY_FN_F = 0x1e2
codes.KEY_FN_S = 0x1e3
codes.KEY_FN_B = 0x1e4

codes.KEY_BRL_DOT1 = 0x1f1
codes.KEY_BRL_DOT2 = 0x1f2
codes.KEY_BRL_DOT3 = 0x1f3
codes.KEY_BRL_DOT4 = 0x1f4
codes.KEY_BRL_DOT5 = 0x1f5
codes.KEY_BRL_DOT6 = 0x1f6
codes.KEY_BRL_DOT7 = 0x1f7
codes.KEY_BRL_DOT8 = 0x1f8
codes.KEY_BRL_DOT9 = 0x1f9
codes.KEY_BRL_DOT10 = 0x1fa

codes.KEY_NUMERIC_0 = 0x200	/* used by phones, remote controls, */
codes.KEY_NUMERIC_1 = 0x201	/* and other keypads */
codes.KEY_NUMERIC_2 = 0x202
codes.KEY_NUMERIC_3 = 0x203
codes.KEY_NUMERIC_4 = 0x204
codes.KEY_NUMERIC_5 = 0x205
codes.KEY_NUMERIC_6 = 0x206
codes.KEY_NUMERIC_7 = 0x207
codes.KEY_NUMERIC_8 = 0x208
codes.KEY_NUMERIC_9 = 0x209
codes.KEY_NUMERIC_STAR = 0x20a
codes.KEY_NUMERIC_POUND = 0x20b
codes.KEY_NUMERIC_A = 0x20c	/* Phone key A - HUT Telephony 0xb9 */
codes.KEY_NUMERIC_B = 0x20d
codes.KEY_NUMERIC_C = 0x20e
codes.KEY_NUMERIC_D = 0x20f

codes.KEY_CAMERA_FOCUS = 0x210
codes.KEY_WPS_BUTTON = 0x211	/* WiFi Protected Setup key */

codes.KEY_TOUCHPAD_TOGGLE = 0x212	/* Request switch touchpad on or off */
codes.KEY_TOUCHPAD_ON = 0x213
codes.KEY_TOUCHPAD_OFF = 0x214

codes.KEY_CAMERA_ZOOMIN = 0x215
codes.KEY_CAMERA_ZOOMOUT = 0x216
codes.KEY_CAMERA_UP = 0x217
codes.KEY_CAMERA_DOWN = 0x218
codes.KEY_CAMERA_LEFT = 0x219
codes.KEY_CAMERA_RIGHT = 0x21a

codes.KEY_ATTENDANT_ON = 0x21b
codes.KEY_ATTENDANT_OFF = 0x21c
codes.KEY_ATTENDANT_TOGGLE = 0x21d	/* Attendant call on or off */
codes.KEY_LIGHTS_TOGGLE = 0x21e	/* Reading light on or off */

codes.BTN_DPAD_UP = 0x220
codes.BTN_DPAD_DOWN = 0x221
codes.BTN_DPAD_LEFT = 0x222
codes.BTN_DPAD_RIGHT = 0x223

codes.KEY_ALS_TOGGLE = 0x230	/* Ambient light sensor */

codes.KEY_BUTTONCONFIG = 0x240	/* AL Button Configuration */
codes.KEY_TASKMANAGER = 0x241	/* AL Task/Project Manager */
codes.KEY_JOURNAL = 0x242	/* AL Log/Journal/Timecard */
codes.KEY_CONTROLPANEL = 0x243	/* AL Control Panel */
codes.KEY_APPSELECT = 0x244	/* AL Select Task/Application */
codes.KEY_SCREENSAVER = 0x245	/* AL Screen Saver */
codes.KEY_VOICECOMMAND = 0x246	/* Listening Voice Command */

codes.KEY_BRIGHTNESS_MIN = 0x250	/* Set Brightness to Minimum */
codes.KEY_BRIGHTNESS_MAX = 0x251	/* Set Brightness to Maximum */

codes.KEY_KBDINPUTASSIST_PREV = 0x260
codes.KEY_KBDINPUTASSIST_NEXT = 0x261
codes.KEY_KBDINPUTASSIST_PREVGROUP = 0x262
codes.KEY_KBDINPUTASSIST_NEXTGROUP = 0x263
codes.KEY_KBDINPUTASSIST_ACCEPT = 0x264
codes.KEY_KBDINPUTASSIST_CANCEL = 0x265

/* Diagonal movement keys */
codes.KEY_RIGHT_UP = 0x266
codes.KEY_RIGHT_DOWN = 0x267
codes.KEY_LEFT_UP = 0x268
codes.KEY_LEFT_DOWN = 0x269

codes.KEY_ROOT_MENU = 0x26a /* Show Device's Root Menu */
/* Show Top Menu of the Media (e.g. DVD) */
codes.KEY_MEDIA_TOP_MENU = 0x26b
codes.KEY_NUMERIC_11 = 0x26c
codes.KEY_NUMERIC_12 = 0x26d
/*
 * Toggle Audio Description: refers to an audio service that helps blind and
 * visually impaired consumers understand the action in a program. Note: in
 * some countries this is referred to as "Video Description".
 */
codes.KEY_AUDIO_DESC = 0x26e
codes.KEY_3D_MODE = 0x26f
codes.KEY_NEXT_FAVORITE = 0x270
codes.KEY_STOP_RECORD = 0x271
codes.KEY_PAUSE_RECORD = 0x272
codes.KEY_VOD = 0x273 /* Video on Demand */
codes.KEY_UNMUTE = 0x274
codes.KEY_FASTREVERSE = 0x275
codes.KEY_SLOWREVERSE = 0x276
/*
 * Control a data application associated with the currently viewed channel,
 * e.g. teletext or data broadcast application (MHEG, MHP, HbbTV, etc.)
 */
codes.KEY_DATA = 0x275

codes.BTN_TRIGGER_HAPPY = 0x2c0
codes.BTN_TRIGGER_HAPPY1 = 0x2c0
codes.BTN_TRIGGER_HAPPY2 = 0x2c1
codes.BTN_TRIGGER_HAPPY3 = 0x2c2
codes.BTN_TRIGGER_HAPPY4 = 0x2c3
codes.BTN_TRIGGER_HAPPY5 = 0x2c4
codes.BTN_TRIGGER_HAPPY6 = 0x2c5
codes.BTN_TRIGGER_HAPPY7 = 0x2c6
codes.BTN_TRIGGER_HAPPY8 = 0x2c7
codes.BTN_TRIGGER_HAPPY9 = 0x2c8
codes.BTN_TRIGGER_HAPPY10 = 0x2c9
codes.BTN_TRIGGER_HAPPY11 = 0x2ca
codes.BTN_TRIGGER_HAPPY12 = 0x2cb
codes.BTN_TRIGGER_HAPPY13 = 0x2cc
codes.BTN_TRIGGER_HAPPY14 = 0x2cd
codes.BTN_TRIGGER_HAPPY15 = 0x2ce
codes.BTN_TRIGGER_HAPPY16 = 0x2cf
codes.BTN_TRIGGER_HAPPY17 = 0x2d0
codes.BTN_TRIGGER_HAPPY18 = 0x2d1
codes.BTN_TRIGGER_HAPPY19 = 0x2d2
codes.BTN_TRIGGER_HAPPY20 = 0x2d3
codes.BTN_TRIGGER_HAPPY21 = 0x2d4
codes.BTN_TRIGGER_HAPPY22 = 0x2d5
codes.BTN_TRIGGER_HAPPY23 = 0x2d6
codes.BTN_TRIGGER_HAPPY24 = 0x2d7
codes.BTN_TRIGGER_HAPPY25 = 0x2d8
codes.BTN_TRIGGER_HAPPY26 = 0x2d9
codes.BTN_TRIGGER_HAPPY27 = 0x2da
codes.BTN_TRIGGER_HAPPY28 = 0x2db
codes.BTN_TRIGGER_HAPPY29 = 0x2dc
codes.BTN_TRIGGER_HAPPY30 = 0x2dd
codes.BTN_TRIGGER_HAPPY31 = 0x2de
codes.BTN_TRIGGER_HAPPY32 = 0x2df
codes.BTN_TRIGGER_HAPPY33 = 0x2e0
codes.BTN_TRIGGER_HAPPY34 = 0x2e1
codes.BTN_TRIGGER_HAPPY35 = 0x2e2
codes.BTN_TRIGGER_HAPPY36 = 0x2e3
codes.BTN_TRIGGER_HAPPY37 = 0x2e4
codes.BTN_TRIGGER_HAPPY38 = 0x2e5
codes.BTN_TRIGGER_HAPPY39 = 0x2e6
codes.BTN_TRIGGER_HAPPY40 = 0x2e7

/* We avoid low common keys in module aliases so they don't get huge. */
codes.KEY_MIN_INTERESTING = codes.KEY_MUTE
codes.KEY_MAX = 0x2ff
codes.KEY_CNT = (codes.KEY_MAX+1)

/*
 * Relative axes
 */

codes.REL_X = 0x00
codes.REL_Y = 0x01
codes.REL_Z = 0x02
codes.REL_RX = 0x03
codes.REL_RY = 0x04
codes.REL_RZ = 0x05
codes.REL_HWHEEL = 0x06
codes.REL_DIAL = 0x07
codes.REL_WHEEL = 0x08
codes.REL_MISC = 0x09
codes.REL_MAX = 0x0f
codes.REL_CNT = (codes.REL_MAX+1)

/*
 * Absolute axes
 */

codes.ABS_X = 0x00
codes.ABS_Y = 0x01
codes.ABS_Z = 0x02
codes.ABS_RX = 0x03
codes.ABS_RY = 0x04
codes.ABS_RZ = 0x05
codes.ABS_THROTTLE = 0x06
codes.ABS_RUDDER = 0x07
codes.ABS_WHEEL = 0x08
codes.ABS_GAS = 0x09
codes.ABS_BRAKE = 0x0a
codes.ABS_HAT0X = 0x10
codes.ABS_HAT0Y = 0x11
codes.ABS_HAT1X = 0x12
codes.ABS_HAT1Y = 0x13
codes.ABS_HAT2X = 0x14
codes.ABS_HAT2Y = 0x15
codes.ABS_HAT3X = 0x16
codes.ABS_HAT3Y = 0x17
codes.ABS_PRESSURE = 0x18
codes.ABS_DISTANCE = 0x19
codes.ABS_TILT_X = 0x1a
codes.ABS_TILT_Y = 0x1b
codes.ABS_TOOL_WIDTH = 0x1c

codes.ABS_VOLUME = 0x20

codes.ABS_MISC = 0x28

codes.ABS_MT_SLOT = 0x2f	/* MT slot being modified */
codes.ABS_MT_TOUCH_MAJOR = 0x30	/* Major axis of touching ellipse */
codes.ABS_MT_TOUCH_MINOR = 0x31	/* Minor axis (omit if circular) */
codes.ABS_MT_WIDTH_MAJOR = 0x32	/* Major axis of approaching ellipse */
codes.ABS_MT_WIDTH_MINOR = 0x33	/* Minor axis (omit if circular) */
codes.ABS_MT_ORIENTATION = 0x34	/* Ellipse orientation */
codes.ABS_MT_POSITION_X = 0x35	/* Center X touch position */
codes.ABS_MT_POSITION_Y = 0x36	/* Center Y touch position */
codes.ABS_MT_TOOL_TYPE = 0x37	/* Type of touching device */
codes.ABS_MT_BLOB_ID = 0x38	/* Group a set of packets as a blob */
codes.ABS_MT_TRACKING_ID = 0x39	/* Unique ID of initiated contact */
codes.ABS_MT_PRESSURE = 0x3a	/* Pressure on contact area */
codes.ABS_MT_DISTANCE = 0x3b	/* Contact hover distance */
codes.ABS_MT_TOOL_X = 0x3c	/* Center X tool position */
codes.ABS_MT_TOOL_Y = 0x3d	/* Center Y tool position */


codes.ABS_MAX = 0x3f
codes.ABS_CNT = (codes.ABS_MAX+1)

/*
 * Switch events
 */

codes.SW_LID = 0x00  /* set = lid shut */
codes.SW_TABLET_MODE = 0x01  /* set = tablet mode */
codes.SW_HEADPHONE_INSERT = 0x02  /* set = inserted */
codes.SW_RFKILL_ALL = 0x03  /* rfkill master switch, type "any"
 =  set = radio enabled */
codes.SW_RADIO = codes.SW_RFKILL_ALL	/* deprecated */
codes.SW_MICROPHONE_INSERT = 0x04  /* set = inserted */
codes.SW_DOCK = 0x05  /* set = plugged into dock */
codes.SW_LINEOUT_INSERT = 0x06  /* set = inserted */
codes.SW_JACK_PHYSICAL_INSERT = 0x07  /* set = mechanical switch set */
codes.SW_VIDEOOUT_INSERT = 0x08  /* set = inserted */
codes.SW_CAMERA_LENS_COVER = 0x09  /* set = lens covered */
codes.SW_KEYPAD_SLIDE = 0x0a  /* set = keypad slide out */
codes.SW_FRONT_PROXIMITY = 0x0b  /* set = front proximity sensor active */
codes.SW_ROTATE_LOCK = 0x0c  /* set = rotate locked/disabled */
codes.SW_LINEIN_INSERT = 0x0d  /* set = inserted */
codes.SW_MUTE_DEVICE = 0x0e  /* set = device disabled */
codes.SW_PEN_INSERTED = 0x0f  /* set = pen inserted */
codes.SW_MAX = 0x0f
codes.SW_CNT = (codes.SW_MAX+1)

/*
 * Misc events
 */

codes.MSC_SERIAL = 0x00
codes.MSC_PULSELED = 0x01
codes.MSC_GESTURE = 0x02
codes.MSC_RAW = 0x03
codes.MSC_SCAN = 0x04
codes.MSC_TIMESTAMP = 0x05
codes.MSC_MAX = 0x07
codes.MSC_CNT = (codes.MSC_MAX+1)

/*
 * LEDs
 */

codes.LED_NUML = 0x00
codes.LED_CAPSL = 0x01
codes.LED_SCROLLL = 0x02
codes.LED_COMPOSE = 0x03
codes.LED_KANA = 0x04
codes.LED_SLEEP = 0x05
codes.LED_SUSPEND = 0x06
codes.LED_MUTE = 0x07
codes.LED_MISC = 0x08
codes.LED_MAIL = 0x09
codes.LED_CHARGING = 0x0a
codes.LED_MAX = 0x0f
codes.LED_CNT = (codes.LED_MAX+1)

/*
 * Autorepeat values
 */

codes.REP_DELAY = 0x00
codes.REP_PERIOD = 0x01
codes.REP_MAX = 0x01
codes.REP_CNT = (codes.REP_MAX+1)

/*
 * Sounds
 */

codes.SND_CLICK = 0x00
codes.SND_BELL = 0x01
codes.SND_TONE = 0x02
codes.SND_MAX = 0x07
codes.SND_CNT = (codes.SND_MAX+1)

export default codes