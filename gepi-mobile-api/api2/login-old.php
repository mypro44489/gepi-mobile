<?php
    include("connection.php");
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $postdata = file_get_contents('php://input');
        //$response['response']='success';
        echo json_encode($postdata);
        exit();
        if (isset($postdata)) {
            $request = json_decode($postdata);
            $login = mysqli_real_escape_string($conn,$request->login);
            $password =mysqli_real_escape_string($conn,$request->password);
           
            $statement="SELECT * FROM users WHERE login='$login' LIMIT 0,1";
            $query=mysqli_query($conn,$statement) or die(mysqli_error($conn));
            if(mysqli_num_rows($query)==1){
                $response=mysqli_fetch_assoc($query);
                if($response['password']==($password)){
                    if($response['status']=='actif'){
                        $response['response']='success';
                    }else{
                        $response['response']='failed';
                        $response['error']='account disabled';
                    }
                }else{
                    $response['response']='failed';
                    $response['error']='password error';
                }
            }else{
                $response=array("response"=>"failed");
            }
        } else{
            $response=array("response"=>"failed");
        }
        echo json_encode($response);
    }
?>
