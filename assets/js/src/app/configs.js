// Libraries
var os = require('os'),
	_ = require('lodash'),
	$ = require('jquery'),
	open = require('open'),
	util = require('util'),
	path = require('path'),
    fs = require('fs-extra'),
    wmic = require('wmic-js'),
    shell = require('shelljs'),
	csv = require('csvtojson/v2'),
	sudo = require('sudo-prompt'),
    tasklist = require('tasklist'),
	{ remote } = require('electron'),
	si = require('systeminformation'),
	new_window = remote.BrowserWindow,
	mainWin = remote.getCurrentWindow();

var act_class = 'actived',
	sub_menu = '#sub-menu',
	sub_items = '#sub-items',
	list_details = '#list-details';

var explain = {
	os: {
		name: `An operating system or OS is a software program that enables the computer hardware to communicate and operate with the computer software. Without a computer operating system, a computer and software programs would be useless. The picture is an example of Microsoft Windows XP, a popular operating system and what the box may look like if you were to visit a local retail store to purchase it.`,

		build: `When a software application is created, and major updates are made, the version number is often assigned to the software. Manufacturers also add a software build number to the version when smaller updates are made. The software build acts like a sub-version number. Patches for fixing bugs, issues (mostly small issues, but sometimes larger issues as well) and sometimes even minor feature additions often result in a change to the software build.`,

		release: `When referring to a software or hardware product, the term release, sometimes abbreviated in writing as rel, refers to a specific named or numbered version of published software. For example, the first published version of a product may be referred to as the initial release. Future releases of related products may be referred to as the second or third release or may have another release number.`,

		uuid: `Alternatively referred to as a GUID (globally unique identifier), UUID is short for universal unique identifier and is a 128-bit unique identification value. UUIDs are used in the Apollo Network Computing System, OSF (Open Software Foundation), DCE (Distributed Computing Environment), and Microsoft Windows, and is fully defined in RFC 4122. Below is an example of a UUID.`,

		platform: `A platform is a group of technologies that are used as a base upon which other applications, processes or technologies are developed. In personal computing, a platform is the basic hardware (computer) and software (operating system) on which software applications can be run.`,

		arch: `When referring to computers, architecture or computer architecture is their overall design and layout. Architecture includes where connections and parts of the computer are to be placed, how each of components operate with each other, dimensions, etc. CPU architecture is very similar, except it deals with how the many components of a processor are arranged and work together, as well as how far apart the transistors are.`,

		service_pack: `In computing, a service pack comprises a collection of updates, fixes, or enhancements to a software program delivered in the form of a single installable package. Companies often release a service pack when the number of individual patches to a given program reaches a certain (arbitrary) limit, or the software release has shown to be stabilized with a limited number of remaining issues based on users' feedback and bug tracking such as Bugzilla.`,

		hostname: `Alternatively referred to as a computer name, nodename, or sitename, a hostname is the name of the computer or device (host) you're currently logged into or visiting on a network.`,

		serial: `Serial is a term used to describe the process of transmitting information one bit at a time, or sequentially. The common opposite of this is parallel transmission.`,
	}
};