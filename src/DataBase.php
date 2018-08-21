<?php 
// namespace DB;
abstract class DataBase{
    protected $name;
    protected $pwd;
    protected $port;
    protected $ipServer;
    
    public function __construct(){
        $this->name = "admin";
        $this->pwd = "admin";
        $this->port = 5432;
        $this->ipServer="127.0.0.1"; 
    }
    public function getParam(){
        echo $this->name;
    }
}
?>