Package.describe({
  name: 'varunlakshmaiah:sweetalert',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'SweetAlert Integration',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/varunlakshmaiah/meteor-sweetalert.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2');  
     api.add_files([
        'sweetalert/src/sweetalert.css',
        'sweetalert/src/sweetalert.js'
    ], ['client']);

});