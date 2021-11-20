$(document).ready(() => {
        $("#form").validate({
            rules: {
                bio: {
                    required: true,
                    minlength: 20,
                },
                title: {
                    required: true,
                    maxlength: 20,
                },
                date: {
                    required: true,
                    digits: true,
                },
                company: {
                    required: true,
                    maxlength: 20,
                },
                article: {
                    required: true,
                    url: true,
                },
                summary: {
                    required: true,
                    minlength: 20,
                },
                address: {
                    required: true
                },
                email: {
                    required: true,
                    email: true,
                },
                phone: {
                    required: true,
                    phoneUS: true
                  }

            },

            messages: {
                bio: {
                    required: 'Please type your bio.',
                    minlength: 'Please enter more characters.',
                },
                title: {
                    required: 'Please enter a title.',
                    maxlength: 'Please enter less characters.',
                },

                date: {
                    required: 'Please enter published date.',
                    digits: 'Please enter numbers only.',
                },
                company: {
                    required: 'Please enter company name.',
                    maxlength: 'Please enter more characters.',
                },
                article: {
                    required: 'Please link an url to the article.',
                    url: "Please link a valid url to the article."
                },
                summary: {
                    required: 'This is required.',
                    minlength: 'Please enter more characters.'
                },
                address: {
                    required: "Please enter your mailing address."
                },
                phone: {
                    required: "Please enter your phone number.",
                    phoneUS: "Please specify a valid phone number."
                },


            }
        });


    });

