let contact_data = {};
document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
        const modal = jQuery('#msg-modal').modal({
            backdrop: 'static',
            keyboard: true,
            show: false
        });

        modal.bind('click', () => {
            modal.hide();
        });

        jQuery('.close').bind('click', () => {
            modal.hide();
        });

        jQuery('#send-btn').bind('click', () => {
            const first_name = jQuery('[name="first-name"]').val();
            const last_name = jQuery('[name="last-name"]').val();
            const email = jQuery('[name="user-email"]').val();
            const msg = jQuery('textarea').val();

            if (email.match('@') && email.match('.')) {
                Object.assign(contact_data, { first_name, last_name, email, msg });
                jQuery('#msg-modal').removeClass('emd-tago');
                modal.show();
                jQuery('form')[0].reset();
            } else {
                alert('Please enter a valid email.');
            }
        });
    }
};