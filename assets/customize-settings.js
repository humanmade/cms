/*
 * Custom JS to modify the Altis CMS module Add New Site page
 */
const siteSubdomain = document.getElementById( 'site-subdomain' ),
	siteSubdirectory = document.getElementById( 'site-subdirectory' ),
	siteCustomDomain = document.getElementById( 'site-custom-domain' ),
	domainTypeRadioBtns = document.getElementsByName( 'domain-type' ),
	siteAddress = document.getElementById( 'site-address' ),
	networkAddress = window.location.hostname;
let domainTextEl = document.createElement( 'span' );
domainTextEl.className = 'site-address-domain-text';

// Add an event listener to each radio button.
domainTypeRadioBtns.forEach( function ( element ) {
	element.addEventListener( 'change', updatedomainText );
} );

// Add domain hints around the site address field.
function updatedomainText( event ) {
	switch ( event.target ) {
		case siteSubdomain:
			domainTextEl.innerHTML = '.' + networkAddress;
			siteAddress.parentElement.appendChild( domainTextEl );
			break;
		case siteSubdirectory:
			domainTextEl.innerHTML = networkAddress + '/ ';
			siteAddress.parentElement.insertBefore( domainTextEl, siteAddress );
			break;
		case siteCustomDomain:
			siteAddress.parentElement.removeChild( domainTextEl );
			break;
		default:
			break;
	}
}

// On load, dispatch a change event for the first radio button.
let changeEvent = new Event( 'change' );
domainTypeRadioBtns[0].dispatchEvent( changeEvent );