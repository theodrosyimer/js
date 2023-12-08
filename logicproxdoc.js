//1 - Simple Pass Through

/*
    The HandleMIDI() function lets you process MIDI events that the plug-in
    receives.

    HandleMIDI is called each time a MIDI event is received by the plug-in and is
    required to process incoming MIDI events. If you do not implement the
    HandleMIDI function, events pass through the plug-in unaffected.

    HandleMIDI is called with one argument which is a JavaScript object that
    represents the incoming MIDI event. HandleMIDI and JavaScript Event object
    use is shown in the examples.
*/

function HandleMIDI(event) {
  event.send() //Pass MIDI events through the plug-in.
}

//2 - Trace Events

/*
    The HandleMIDI() function lets you process MIDI events that the plug-in
    receives.

    HandleMIDI is called each time a MIDI event is received by the plug-in and is
    required to process incoming MIDI events. If you do not implement the
    HandleMIDI function, events pass through the plug-in unaffected.

    HandleMIDI is called with one argument which is a JavaScript object that
    represents the incoming MIDI event. HandleMIDI and JavaScript Event object
    use is shown in the examples.
*/

function HandleMIDI(event) {
  event.trace() //Log events to the plug-in console and do not send them
  //anywhere.
}

//3 - Transpose and Delay

/*
    The HandleMIDI() function lets you process MIDI events that the plug-in
    receives.

    HandleMIDI is called each time a MIDI event is received by the plug-in and is
    required to process incoming MIDI events. If you do not implement the
    HandleMIDI function, events pass through the plug-in unaffected.

    HandleMIDI is called with one argument which is a JavaScript object that
    represents the incoming MIDI event. HandleMIDI and JavaScript Event object
    use is shown in the examples.
*/

//Repeat notes up one octave with 100ms delay and pass all other events through.
function HandleMIDI(event) {
  event.send() // send original event

  // if it's a note
  if (event instanceof Note) {
    event.pitch += 12 // transpose up one octave
    event.sendAfterMilliseconds(100) // send after delay
  }
}

//4 - ProcessMIDI Callback

/*
    The ProcessMIDI() function lets you perform periodic (generally
    timing-related) tasks. This can be used when scripting a sequencer,
    arpeggiator, or other tempo-driven MIDI effect. ProcessMIDI is generally not
    required for applications that do not make use of musical timing information
    from the host. ProcessMIDI is called once per “process block,” which is
    determined by the host’s audio settings (sample rate and buffer size).

    ProcessMIDI is called with no arguments.

    This function will often be used in combination with the "JavaScript
    TimingInfo object" to make use of timing information from the host
    application.  The use of ProcessMIDI and the TimingInfo object is shown in
    the example.

    Note: To enable the GetTimingInfo feature, you need to add
          var NeedsTimingInfo = true; at the global script level (outside of any
          functions).
*/

// Define NeedsTimingInfo as true at the global scope to enable GetTimingInfo()
var NeedsTimingInfo = true

function ProcessMIDI() {
  var info = GetTimingInfo() // get a TimingInfo object from the host

  //if the transport is running
  if (info.playing) {
    Trace(info.tempo) // print the tempo in the plugin console
  }
}

//5 - Velocity Slider

/*
    The GetParameter() function retrieves information from parameters defined
    with var PluginParameters.

    The GetParameter name argument must match the defined PluginParameters name
    value.
*/

//Open the Mod Wheel Glissando JavaScript in the Script Editor to see how the
//GetParameter function is used.

function HandleMIDI(event) {
  //retrieves "Note Velocity" information from the defined "Note Velocity"
  //parameter
  event.velocity = GetParameter('Note Velocity')

  event.send() //sends the note event
}

//create a linear parameter called "Note Velocity" with a range of 1 to 127, and
//a default value of 80
var PluginParameters = [
  {
    name: 'Note Velocity',
    type: 'lin',
    minValue: 1,
    maxValue: 127,
    numberOfSteps: 126,
    defaultValue: 80,
  },
]

//6 - ParameterChanged Callback

/*
    The ParameterChanged() function lets you perform tasks triggered by changes
    to plug-in parameters. ParameterChanged is called each time one of the
    plug-in’s parameters is set to a new value. ParameterChanged is also called
    once for each parameter when you load a plug-in setting.

    ParameterChanged is called with two arguments, first the parameter index (an
    integer number starting from 0), then the parameter value (a number).
*/

//Print parameter changes to the plug-in console. This example also creates a
//slider in the plug-in window and assigns the ParameterChanged function to it.

//create a slider (default range 0.0 - 1.0)
var PluginParameters = [
  {
    name: 'Slider',
    type: 'lin',
    minValue: 0,
    maxValue: 1,
    numberOfSteps: 100,
    defaultValue: 0,
  },
]

function ParameterChanged(param, value) {
  // if it's the slider you just created
  if (param == 0) {
    Trace(value) // print the value to the console
  }
}

//7 - Event Creation

/*
    JavaScript Event Object

    When the "HandleMIDI function" is called, an Event object represents one MIDI
    event and implements the following methods you can call in your script:

    Event.send() //send the event

    Event.sendAfterMilliseconds(number ms) //send the event after the specified
                                           //value has elapsed(can be an integer
                                           //or floating point number)

    Event.sendAtBeat(number beat) //as above, but uses the beat value as a delay
                                  //in beats from the current position

    Event.trace() //print the event to the plug-in console

    Event.toString() //returns a String representation of the event

    Event.channel(number) //sets MIDI channel 1 to 16. Note: Event.channel is an
                          //event property, rather than a method

    Event.beatPos	//event property, represents the beat position of the event
    				//Event.send() sends at the beat position set by this property

    Event.articulationID	//property representing the articulation id of the note

    The Event object is not instantiated directly, but is a prototype for the
    following event-specific object types. All of the following types inherit the
    methods described above and the channel property. The event types and their
    properties are passed to HandleMIDI as follows:

    Note 	//prototype for NoteOn and NoteOff

    NoteOn.pitch(integer number) //pitch from 1-127

    NoteOn.velocity(integer number) //velocity from 0-127. A velocity value of 0
                                    //is interpreted as a note off event, not a
                                    //note on.

    NoteOff.pitch(integer number) //pitch from 0-127

    NoteOff.velocity(integer number) //velocity from 0-127

    PolyPressure.pitch(integer number) //pitch from 1-127. Polyphonic aftertouch
                                       //is uncommon on synthesizers

    PolyPressure.value(integer number) //pressure value from 0-127

    ControlChange.number(integer number) //controller number from 0-127

    ControlChange.value(integer number) //controller value from 0-127
                                        //tip: use MIDI.controllerName(number) to
                                        //look up the name of the controller

    ProgramChange.number(integer number) //Program change number from 0-127

    ChannelPressure.value(integer number) //aftertouch value from 0-127

    PitchBend.value(integer number) //14-bit pitch bend value from -8192 to 8191
                                    //a value of 0 is center

    TargetEvent.target(string)	// Name of target menu entry
    							// - Target events need a corresponding menu entry,
    							// see Tutorial script 15

    TargetEvent.value(float)	// Value of set Target from 0.0 to 1.0
*/

//Replace every MIDI event with a modulation control change message
//Tip: you can use the JavaScript "new" keyword to generate a new instance of an
//Event object of any type.

function HandleMIDI() {
  var cc = new ControlChange() //make a new control change message
  cc.number = 1 //set it to controller 1 (modulation)
  cc.value = 100 //set the value
  cc.send() //send the event
  cc.trace() //print the event to the console
}

//8 - Event Modification

/*
    JavaScript Event Object

    When the "HandleMIDI function" is called, an Event object represents one MIDI
    event and implements the following methods you can call in your script:

    Event.send() //send the event

    Event.sendAfterMilliseconds(number ms) //send the event after the specified
                                           //value has elapsed(can be an integer
                                           //or floating point number)

    Event.sendAtBeat(number beat) //as above, but uses the beat value as a delay
                                  //in beats from the current position

    Event.trace() //print the event to the plug-in console

    Event.toString() //returns a String representation of the event

    Event.channel(number) //sets MIDI channel 1 to 16. Note: Event.channel is an
                          //event property, rather than a method

    Event.beatPos	//event property, represents the beat position of the event
    							  //Event.send() sends at the beat position set

    Event.articulationID	//property representing the articulation id of the note

    The Event object is not instantiated directly, but is a prototype for the
    following event-specific object types. All of the following types inherit the
    methods described above and the channel property. The event types and their
    properties are passed to HandleMIDI as follows:

    Note 	//prototype for NoteOn and NoteOff

    NoteOn.pitch(integer number) //pitch from 1-127

    NoteOn.velocity(integer number) //velocity from 0-127. A velocity value of 0
                                    //is interpreted as a note off event, not a
                                    //note on.

    NoteOff.pitch(integer number) //pitch from 0-127

    NoteOff.velocity(integer number) //velocity from 0-127

    PolyPressure.pitch(integer number) //pitch from 1-127. Polyphonic aftertouch
                                       //is uncommon on synthesizers

    PolyPressure.value(integer number) //pressure value from 0-127

    ControlChange.number(integer number) //controller number from 0-127

    ControlChange.value(integer number) //controller value from 0-127
                                        //tip: use MIDI.controllerName(number) to
                                        //look up the name of the controller

    ProgramChange.number(integer number) //Program change number from 0-127

    ChannelPressure.value(integer number) //aftertouch value from 0-127

    PitchBend.value(integer number) //14-bit pitch bend value from -8192 to 8191
                                    //a value of 0 is center

    TargetEvent.target(string)	// Name of target menu entry
    							// - Target events need a corresponding menu entry,
    							// see Tutorial script 15

    TargetEvent.value(float)	// Value of set Target from 0.0 to 1.0
*/

//Replace every MIDI event received with a C3 notes on/off
//Tip: you can use the JavaScript "new" keyboard to generate a new instance of an
//Event object of any type.

var NeedsTimingInfo = true //needed for .sendAfterBeats() to work

function HandleMIDI(event) {
  var on = new NoteOn() //make a new note on
  on.pitch = 60 //set it's pitch to C3
  on.send() //send the note

  var off = new NoteOff(on) //make a note off using the note on to initialize
  //it's pitch value (to C3)
  off.sendAfterBeats(1) //send a note off one beat later
}

//9 - NeedsTimingInfo and GetTimingInfo

/*
    JavaScript TimingInfo object

    The TimingInfo object contains timing information that describes the state of
    the host transport and the current musical tempo and meter. A TimingInfo
    object can be retrieved by calling GetTimingInfo()

    TimingInfo properties:

    TimingInfo.playing //uses boolean logic where "true" means the host
                       //transport is running.

    TimingInfo.blockStartBeat //a floating point number indicates the beat
                              //position at the start of the process block

    TimingInfo.blockEndBeat //a floating point number indicates the beat position
                            //at the end of the process block

    TimingInfo.blockSize //a floating point number indicates the length of the
                         //process block in beats

    TimingInfo.tempo //a floating point number indicates the host tempo

    TimingInfo.meterNumerator //an integer indicates the host meter numerator

    TimingInfo.meterDenominator //an integer number indicates the host meter
                                //denominator

    TimingInfo.cycling //uses boolean logic where "true" means the host transport
                       //is cycling

    TimingInfo.leftCycleBeat //a floating point number indicates the beat position
                             //at the start of the cycle range

    TimingInfo.rightCycleBeat //a floating point number indicates the beat
                              //position at the end of the cycle range

    *note: The length of a beat is determined by the host application time
           signature and tempo.
*/

//print the beat position while the transport is running

var NeedsTimingInfo = true //needed for GetTimingInfo() to work

function ProcessMIDI() {
  var info = GetTimingInfo() //get the timing info from the host

  //if the transport is playing
  if (info.playing) Trace(info.blockStartBeat) //print the beat position
}

//10 - Event Detection

/*
    JavaScript MIDI object

    The MIDI object contains a number of convenient and easy to use functions
    that can be used when writing your scripts.

    Note: the MIDI object is a property of the global object, which means that
          you do not instantiate it, but access it's functions much like you
          would the JavaScript math object. An example is calling
          MIDI.allNotesOff() directly.

    MIDI object properties:

    noteNumber(string name) //returns the MIDI note number for a given note name.
                            //for example: 'C3' or 'B#2'
                            //note: you cannot use flats in your argument. Use
                                    A#3, not Bb3

    noteName(number pitch) //returns the name (string) for a given MIDI note
                           //number

    ccName(number controller) //returns the controller name (string) for a given
                              //controller number

    allNotesOff() //sends the all notes off message on all MIDI channels

    normalizeStatus(number status) //normalizes a value to the safe range of
                                   //MIDI status bytes (128-239)

    normalizeChannel(number channel) //normalizes a value to the safe range of
                                     //MIDI channels (1-16)

    normalizeData(number data) //normalizes a value to the safe range of MIDI
                               //data byes (0-127)
*/

//pass events through and send all notes off message when receiving controller 20
function HandleMIDI(event) {
  //pass through the event
  event.send()

  //if the event is a MIDIcc 20
  if (event instanceof ControlChange && event.number == 20) MIDI.allNotesOff() //send all notes off message
}

//11 - Slider Creation

/*
    Create JavaScriptMIDI controls

    The JavaScriptMIDI Script Editor lets you use a simple shorthand to add
    standard controllers such as sliders and menus for automated or real time
    control of your plug-ins. The only mandatory property to define a new
    parameter is a name, which will default to a basic slider. In addition, you
    can add the following properties to change the type and behavior of controls.

    Optional properties:

    type:
        //type one of the following strings as the value:
        "lin" //creates a linear fader
        "log" //creates a logarithmic fader
        "menu" //creates a menu
        "valueStrings" //the menu type requires an additional property that is
                         //an array of strings to show in the menu

    defaultValue: //type an integer or floating point number to set a default
                  //value. If not value is typed the default is 0.0

    minValue: //type an integer or floating point number to set a minimum value.
              //if no value is typed, the default is 0.0

    maxValue: //type an integer or floating point number to set a maximum value.
              //if no value is typed, the default is 1.0
*/

//Define MIDI plug-in controls

//This results in a slider named "Parameter x" with a default range of 0 to 1.
//It is set to the mid-point of 0.5
var PluginParameters = [{ name: 'Parameter x', type: 'lin', defaultValue: 0.5 }]

//12 - Slider Ranges

/*
    Create JavaScriptMIDI controls

    The JavaScriptMIDI Script Editor lets you use a simple shorthand to add
    standard controllers such as sliders and menus for automated or real time
    control of your plug-ins. The only mandatory property to define a new
    parameter is a name, which will default to a basic slider. In addition, you
    can add the following properties to change the type and behavior of controls.

    Optional properties:

    type:
        //type one of the following strings as the value:
        "lin" //creates a linear fader
        "log" //creates a logarithmic fader
        "menu" //creates a menu
        "valueStrings" //the menu type requires an additional property that is
                         //an array of strings to show in the menu

    defaultValue: //type an integer or floating point number to set a default
                  //value. If not value is typed the default is 0.0

    minValue: //type an integer or floating point number to set a minimum value.
              //if no value is typed, the default is 0.0

    maxValue: //type an integer or floating point number to set a maximum value.
              //if no value is typed, the default is 1.0
*/

//Define MIDI plug-in controls

//This results in a linear slider type, with five possible positions(steps), and
//a range from 0 to 5.
var PluginParameters = [
  {
    name: 'Octaves',
    defaultValue: 3,
    minValue: 0,
    maxValue: 5,
    numberOfSteps: 5,
    type: 'lin',
  },
]

//13 - Menu Creation

/*
    Create JavaScriptMIDI controls

    The JavaScriptMIDI Script Editor lets you use a simple shorthand to add
    standard controllers such as sliders and menus for automated or real time
    control of your plug-ins. The only mandatory property to define a new
    parameter is a name, which will default to a basic slider. In addition, you
    can add the following properties to change the type and behavior of controls.

    Optional properties:

    type:
        //type one of the following strings as the value:
        "lin" //creates a linear fader
        "log" //creates a logarithmic fader
        "menu" //creates a menu
        "valueStrings" //the menu type requires an additional property that is
                         //an array of strings to show in the menu

    defaultValue: //type an integer or floating point number to set a default
                  //value. If not value is typed the default is 0.0

    minValue: //type an integer or floating point number to set a minimum value.
              //if no value is typed, the default is 0.0

    maxValue: //type an integer or floating point number to set a maximum value.
              //if no value is typed, the default is 1.0
*/

//Define MIDI plug-in controls

//This creates a menu named "Range" with the options: "Low", "Mid", and "High"
var PluginParameters = [
  {
    name: 'Range',
    type: 'menu',
    valueStrings: ['Low', 'Medium', 'High'],
    defaultValue: 0,
    numberOfSteps: 3,
  },
]

//14 - Convert Events with Parameter

/*
    Retrieve plug-in parameter values

    Call GetParameter() with the parameter name to return a value (number object)
    with the parameter's current value. GetParameter() is typically used inside
    the "HandleMIDI function" or "ProcessMIDI function"
*/

//This example converts modulation events into note events and provides a slider
//to determine note lengths

var NeedsTimingInfo = true

//create a slider (default range 0 - 100)
var PluginParameters = [
  {
    name: 'Note Length',
    type: 'lin',
    minValue: 0,
    maxValue: 100,
    numberOfSteps: 100,
    defaultValue: 0,
    unit: '%',
  },
]

function HandleMIDI(event) {
  //if event is MIDI cc1 (modwheel)
  if (event instanceof ControlChange && event.number == 1) {
    var note = new NoteOn() //create a NoteOn object

    //since modwheel's range is 0-127, and pitch range is 1-127
    //convert a modwheel value of 0 to 1
    if (event.value == 0) event.value = 1

    note.pitch = event.value //use cc value as note pitch
    note.velocity = 100 //use velocity 100
    note.send() //send note on

    var off = new NoteOff(note) //create a NoteOff object that inherits the
    //NoteOn's pitch and velocity

    //retrieve the parameter value of the slider you created (add 0.1 to
    //guarantee note on and off are not simultaneous
    var delayInBeats = GetParameter('Note Length') / 100 + 0.1

    off.sendAfterBeats(delayInBeats) //send note off after the length in
    //beats is set via the slider
  }
}

// 15 - Control Plug-ins
/*

JavaScript TargetEvent Object

	With the TargetEvent object you can create user definable MIDI CC messages
	or control plug-in parameters.

	The object reads the parameter to be modified from a menu in which the user can select
	a destination MIDI CC, or use the Learn Plug-in Parameter command to assign any
	parameter of a plug-in inserted after (below) Scripter in the same channel strip.
	The chosen destination is saved with the plug-in setting.

	TargetEvent properties:

		TargetEvent.target(string)	// Name of target menu entry

		TargetEvent.value(float)	// Value of set target from 0.0 to 1.0

*/

// example: control any plug-in parameter with the mod wheel
// to test the function of this script, insert any plug-in or software instrument in
// the same channel strip, run the script and choose "Learn Plug-in Parameter" in the menu,
// then click any plug-in parameter to control it with the mod wheel

// create a menu for the mod wheel target control by giving a name to the menu entry
// and setting the type to "target"
var PluginParameters = [
  // parameter 0
  {
    name: 'Modwheel Target',
    type: 'target',
  },
]

// HandleMIDI is called every time the Scripter receives a MIDI event.
function HandleMIDI(incomingEvent) {
  // remap modulation to target selected in menu
  // check for incoming CC event with number 1 (Modwheel)
  if (incomingEvent instanceof ControlChange && incomingEvent.number == 1) {
    var newEvent = new TargetEvent() // create new Target Event
    newEvent.target = 'Modwheel Target' // set menu entry to be used
    // by this event by its name
    newEvent.value = incomingEvent.value / 127 // rescale from 0..127 to 0.0...1.0
    newEvent.send() // send the event
  } else {
    // send all other events
    incomingEvent.send()
  }
}
