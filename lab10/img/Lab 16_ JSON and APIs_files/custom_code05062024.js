////////////////////////////////////////////////////////////////////////
// DESIGNPLUS CONFIG                              
////////////////////////////////////////////////////////////////////////
// Legacy
var DT_variables = {
    iframeID: '',
    // Path to the hosted USU Design Tools
    path: 'https://designtools.ciditools.com/',
    templateCourse: '54241',
    // OPTIONAL: Button will be hidden from view until launched using shortcut keys
    hideButton: true,
    // OPTIONAL: Limit by course format
    limitByFormat: false, // Change to true to limit by format
    // adjust the formats as needed. Format must be set for the course and in this array for tools to load
    formatArray: [
        'online',
        'on-campus',
        'blended'
    ],
    // OPTIONAL: Limit tools loading by users role
    limitByRole: false, // set to true to limit to roles in the roleArray
    // adjust roles as needed
    roleArray: [
        'student',
        'teacher',
        'admin'
    ],
    // OPTIONAL: Limit tools to an array of Canvas user IDs 
    limitByUser: false, // Change to true to limit by user
    // add users to array (Canvas user ID not SIS user ID)
    userArray: [
        '1234',
        '987654'
    ],
    // OPTIONAL: Relocate Ally alternative formats dropdown and hide heading
    overrideAllyHeadings: false,
    // OPTIONAL: Make assignment rubrics sortable
    sortableRubrics: false,
    // OPTIONAL: Transform people page ina course to show student cards
    showStudentCards: false
};

// New
DpPrimary = {
    lms: 'canvas',
    templateCourse: '71276',
    hideButton: true,
    hideLti: false,
    extendedCourse: '', // added in sub-account theme
    sharedCourse: '', // added from localStorage
    courseFormats: [],
    canvasRoles: [],
    canvasUsers: [],
    canvasCourseIds: [],
    plugins: [],
    excludedModules: [],
    includedModules: [],
    lang: 'en',
    defaultToLegacy: false,
    enableVersionSwitching: true,
    hideSwitching: false,
}

// merge with extended/shared customizations config
DpConfig = { ...DpPrimary, ...(window.DpConfig ?? {}) }

$(function () {
    const uriPrefix = (location.href.includes('.beta.')) ? 'beta.' : '';
    const toolsUri = (DpConfig.toolsUri) ? DpConfig.toolsUri : `https://${uriPrefix}designplus.ciditools.com/`;
    $.getScript(`${toolsUri}js/controller.js`);
});
////////////////////////////////////////////////////////////////////////
// END DESIGNPLUS CONFIG                          
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// BLUE CONNECTOR CONFIG                          
////////////////////////////////////////////////////////////////////////
var BLUE_CANVAS_SETUP = {
    connectorUrl: "https://blue.ucsc.edu/ucscBlueConnector/",
    canvasAPI: "https://canvas.ucsc.edu",
    domainName: "com.explorance",
    consumerID: "4ka4tx4nLdejNUrQDGL9zA==",
    defaultLanguage: "en-us"
}, BlueCanvasJS = document.createElement("script");
BlueCanvasJS.setAttribute("type", "text/javascript");
BlueCanvasJS.setAttribute("src", "https://blue.ucsc.edu/ucscBlueConnector//Scripts/Canvas/BlueCanvas.min.js");
document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);
////////////////////////////////////////////////////////////////////////
// END OF BLUE CONNECTOR CONFIG                   
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// COURSE MATERIALS BUTTON ICON AND SIZING CORRECTIONS                 
////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $('#context_external_tool_5713_menu_item a img').css({ 'width': '26px' });
    $('#context_external_tool_5713_menu_item a div').text('Course Materials');
})
///////////////////////////// END OF BLOCK /////////////////////////////


////////////////////////////////////////////////////////////////////////
// ADD RESOURCES BUTTON IN GLOBAL NAVIGATION                     
////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $('#menu').append('<li class="globalNavExternalTool menu-item ic-app-header__menu-list-item"><a class="ic-app-header__menu-list-link" href="https://sites.google.com/ucsc.edu/campusresources/home" target="_blank"><svg class="ic-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=".35in" height=".35in" viewBox="0 0 105 105"><image x="1" y="1" width="103" height="103" xlink:href="data:img/png;base64,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"/></svg><div class="menu-item__text">Resources</div></a></li>');
});
///////////////////////////// END OF BLOCK /////////////////////////////


////////////////////////////////////////////////////////////////////////
// ADD LIBRARY BUTTON IN GLOBAL NAVIGATION                     
////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $('#context_external_tool_5713_menu_item').after('<li class="menu-item ic-app-header__menu-list-item "> <a id="global_nav_library_link" href="https://library.ucsc.edu/" class="ic-app-header__menu-list-link" target="_blank"> <div class="menu-item-icon-container" aria-hidden="true"> <svg id="Layer_1" data-name="Layer 1" class="ic-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289 300"> <defs> <style> .cls-1 { fill: #fff; stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M273.17,157.54l1.3-34.16c3.26-.94,5.62-3.6,5.62-6.75,0-3.93-3.68-7.12-8.21-7.12s-8.21,3.19-8.21,7.12c0,2.51,1.5,4.71,3.76,5.97l-4.59,34.35h-14.17l-4.71-35.19c2.26-1.27,3.76-3.47,3.76-5.97,0-3.93-3.68-7.12-8.21-7.12s-8.21,3.19-8.21,7.12c0,3.19,2.43,5.9,5.77,6.8l2.53,34.93c-9.23,2.19-16.09,10.47-16.09,20.36v3.25c0,.73.04,1.44.11,2.15.27,9.23-1.2,33.64-16.86,35.45-20.29,2.35-24.37,3.16-36.44,9.21-19.95,10-17.49,21.13-34.08,28.71-23.81,10.88-41.78-6.99-71.79,5.88-10.79,4.63-9.51,7.48-25.93,14.31-13.36,5.56-25.09,8.12-32.92,9.42-7.49,2.52-5.71,13.74,2.19,13.74h191.38c30.58,0,55.37-25.13,55.37-56.13v-38.57c0-1.78,1.45-3.23,3.23-3.23h10.45c11.56,0,20.93-9.37,20.93-20.93v-3.25c0-9.86-6.81-18.12-15.99-20.34Z"></path> <path class="cls-1" d="M3.76,275.03c4.25-.7,8.46-1.61,12.61-2.71V39.32c0-1.6,1.46-2.79,3.03-2.48l5.84,1.18c3.06.62,5.25,3.3,5.25,6.42v223.36c1.23-.47,2.45-.96,3.66-1.46,5.2-2.17,8.24-3.78,10.57-5.24V42.87h172.9c10.66,0,21.21,8.64,21.21,19.31v35.14c.23,0,.45-.03.69-.03,4.36,0,8.39,1.35,11.65,3.64v-39.56c0-18.07-14.65-32.72-32.72-32.72h-24.17l-.05-10.27c-.06-10.94-9.56-19.43-20.43-18.27L17.81,16.76c-8.91.95-15.68,8.47-15.68,17.44v241.21l.72-.24.9-.15ZM44.72,28.2l127.25-13.59c4.28-.46,8.01,2.88,8.03,7.18l.04,6.85H44.72v-.44Z"></path> </svg> </div> <div class="menu-item__text"> Library </div> </a> </li>');
});
///////////////////////////// END OF BLOCK /////////////////////////////


////////////////////////////////////////////////////////////////////////
// GLOBAL ENV VARIABLES FOR INTERNAL CANVAS CUSTOMIZATIONS            
////////////////////////////////////////////////////////////////////////
// Check if user is ANY type of admin
const userIsAdmin = ENV.current_user_roles.includes("admin");
// Check if user is a root admin 
const userIsRootAdmin = ENV.current_user_roles.includes("root_admin");
// Check if user is an account admin
const userIsAcctAdmin = ENV.current_user_types.includes("AccountAdmin");
// Get current Canvas Session URL
const currentUrl = window.location.href;
////////////////////////////////////////////////////////////////////////
// END OF GLOBAL ENV VARIABLES                                        
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
// DISABLE COURSE CODE FIELD FOR NON_ADMINS 
// Added by Adonis Hamad                    
// DEC 20, 2023                             
////////////////////////////////////////////////////////////////////////
try {
    if (currentUrl.includes("/courses/") && currentUrl.includes("/settings") && userIsAdmin === false) {
        document.getElementById("course_course_code").disabled = true;
    };
} catch (error) {
    console.error('Custom Block Error:', error);
}
///////////////////////////// END OF BLOCK /////////////////////////////



////////////////////////////////////////////////////////////////////////
// Hide Course Material Website sidebar for non-admins  
// Added by Sarah Frost 8/31/2023 
// Edited by Adonis Hamad 1/4/2024
////////////////////////////////////////////////////////////////////////
try {
    if (userIsAdmin === false) {
        //Hide Canvas Data Portal tab
        document.getElementsByClassName("context_external_tool_17")[0].style.display = "none";
        //Hide Item Banks tab
        document.getElementsByClassName("context_external_tool_807")[0].style.display = "none";
        //Hide Badgr Analytics tab
        document.getElementsByClassName("context_external_tool_5721")[0].style.display = "none";
        //Hide Settings
        document.getElementsByClassName("settings")[0].style.display = "none";
    };
}
catch (error) {
    console.error('Custom Block Error:', error);
}
///////////////////////////// END OF BLOCK /////////////////////////////



////////////////////////////////////////////////////////////////////////
// DISABLE DEFAULT EMAIL CHANGE FOR NON-ROOT ADMINS   
// Added by Adonis Hamad & Sarah Frost                
// May 2, 2024                                        
////////////////////////////////////////////////////////////////////////
const onProfilePage = currentUrl.includes("/profile/settings");
try {
    if (onProfilePage === true && userIsRootAdmin === false) {
        var starElements = document.querySelectorAll('#right-side .email_meta');
        starElements.forEach(element => element.remove());
        document.getElementById('default_email_id').disabled = true;
    }
} catch (error) {
    console.error('Custom Block Error:', error);
}
///////////////////////////// END OF BLOCK /////////////////////////////