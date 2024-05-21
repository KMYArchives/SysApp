function system_tab() {
    //os_details();
	sub_items_resume();
    second_bar_system();
}

function os_details() {
	list_title_details("<div class='label'>Basic</div>");

	si.osInfo().then( info => {
		$(list_details + ' > .details').append(`
			<div class='item'>
				OS: ${ info.distro }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.distro }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.name }'></div>
			</div>

			<div class='item'>
				Release: ${ info.release }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.release }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.release }'></div>
			</div>

			<div class='item'>
				Build: ${ info.build }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.build }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.build }'></div>
			</div>

			<div class='item'>
				Platform: ${ info.platform }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.platform }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.platform }'></div>
			</div>

			<div class='item'>
				Architecture: ${ info.arch } (${ formatArch(info.arch) })

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.arch }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.arch }'></div>
			</div>

			<div class='item'>
				Service pack: ${ info.servicepack }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.servicepack }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.service_pack }'></div>
			</div>
			
			<div class='item'>
				Hostname: ${ info.hostname }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.hostname }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.hostname }'></div>
			</div>

			<div class='item'>
				Serial: ${ info.serial }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.serial }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.serial }'></div>
			</div>
		`);

		si.uuid().then( info => { 
			$(list_details + ' > .details').append(`<div class='item'>
				UUID: ${ info.os }

				<div class='fas fa-copy' onclick="copyToClipboard('${ info.os }')" title='Move to clipboard'></div>
				<div class='fas fa-question-circle' title='${ explain.os.uuid }'></div>
			</div>`); 
		});
	});
}

function storage_details() {

}

function graphics_details() {

}

function accounts_details() {

}

function versions_details() {

}

function date_time_details() {
	
}