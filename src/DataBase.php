<?php 
// namespace DB;
// abstract 
class DataBase{

    protected $_user;
    protected $_pwd;
    protected $_host;
    protected $_dbname;
    
    public function __construct(){
        $this->_user = "marjorieandrieux_mehdi";
        $this->_pwd = "motdepasse";
        $this->_host = "postgresql-marjorieandrieux.alwaysdata.net";
        $this->_dbname="marjorieandrieux_humanproject"; 
    }

    public function connect(){

        //Be careful when specifying the DSN prefix : e.g. "pgsql:host=..." or "mysql:host=..."
        $dbConnect = new PDO('pgsql:host='.$this->_host.';dbname='.$this->_dbname,$this->_user, $this->_pwd);

        if ($dbConnect){
        return $dbConnect;
        }
    }

    public function getAverageSize(){

        $reqAvgSize = $this->connect()->prepare('SELECT COUNT(:firstParam) FROM :secondParam ');
        $firstParam = '*';
        $secondParam = 'personnage';


        $reqAvgSize -> bindParam(':firstParam', $firstParam);
        $reqAvgSize -> bindParam(':secondParam', $secondParam);
        $reqAvgSize -> execute();
        // $reqAvgSize -> fetch();

        // print $reqAvgSize;

        return $reqAvgSize[0];
   
    }
}
?>