<?php
    //http://stackoverflow.com/questions/18382740/cors-not-working-php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day 
        header('Access-Control-Allow-Headers: Origin, Content-Type, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'); // allow certain headers
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        
            {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $request = json_decode(file_get_contents("php://input"));
    // echo $request->fName;
    if (isset($request)) {
        // $request = json_decode($postdata);
        $fName = $request->fName;
        $lName = $request->lName;
        $cusEmail = $request->email;
        $fNumber = $request->pNumber;
        $message = $fName . ' ' . $lName . "\r\n" . $cusEmail . "\r\n" . $fNumber;

        if ($fName != "") {
            echo "Server returns: " . $message. "\r\n";
            mail($cusEmail,'thompson.rashaan@gmail.com', 'From profileMe', $message);
        }
        else {
            echo "Empty fName parameter!";
        }
    }
    else {
        echo "Not called properly with username parameter!";
    }
    
    
?>