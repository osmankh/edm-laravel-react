<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" style="background-image: url({{  URL::asset('/storage/bg_login.jpg') }})">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>eDM Builder</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <style>
        html {
            background: no-repeat center center fixed;
            -moz-background-size: cover;
            -o-background-size: cover;
            -webkit-background-size: cover;
            background-size: cover;
        }
    </style>
</head>
<body>
<div id="app"></div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
