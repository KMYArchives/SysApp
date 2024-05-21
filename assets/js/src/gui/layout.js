function header() {
    $('header').empty();
    $('header').append(`<div class="tab actived" id="system">
        System
        <div class="fab fa-windows icon"></div>
    </div>

    <div class="tab" id="hardware">
        Hardware
        <div class="fas fa-microchip icon"></div>
    </div>

    <div class="tab" id="devices">
        Devices
        <div class="fas fa-headphones icon"></div>
    </div>
    
    <nav>
        <div class="tab trial bdr-lef no-bdr-rig">
            15 days
            <div class="fas fa-key icon"></div>
        </div>

        <div class="fas fa-desktop" list="clients-list" onclick="toggle_clients(this);"></div>
        <div class="fas fa-bars"></div>
    </nav>`);
}

function second_bar_system() {
    $(sub_menu).empty();
    $(sub_menu).append(`<div class="tab actived" onclick="sub_items_resume();">
        Resume
        <div class="fas fa-info-circle icon"></div>
    </div>

    <div class="tab" onclick="sub_items_tasks();">
        Tasks
        <div class="fas fa-tasks icon"></div>
    </div>

    <div class="tab" onclick="sub_items_network();">
        Network
        <div class="fas fa-wifi icon"></div>
    </div>

    <div class="tab" onclick="sub_items_manager();">
        Manager
        <div class="fas fa-user-shield icon"></div>
    </div>

    <div class="fas fa-save right bdr-lef"></div>
    <div class="fas fa-share-alt right bdr-lef no-bdr-rig"></div>`);
}

function sub_items_resume() {
    $(sub_items).empty();
    $(sub_items).append(`<div class="content">
        <div class="item actived" onclick="os_details()">Basic</div>
        <div class="item" onclick="storage_details()">Storage</div>
        <div class="item" onclick="graphics_details()">Graphics</div>
        <div class="item" onclick="accounts_details()">Accounts</div>
        <div class="item" onclick="versions_details()">Versions</div>
        <div class="item" onclick="date_time_details()">Date and time</div>
    </div>`);
}

function list_title_details(menu) {
    $(list_details).empty();
	$(list_details).append(`<div class='title'>${ menu }</div><div class='details'></div>`);
}