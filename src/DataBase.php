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

        //Tests with bindParam function (does not work...)

        // $reqAvgSize = $this->connect()->prepare('SELECT COUNT(:firstParam) FROM :secondParam ');
        // $firstParam = '*';
        // $secondParam = 'personnage';


        // $reqAvgSize -> bindParam(':firstParam', $firstParam);
        // $reqAvgSize -> bindParam(':secondParam', $secondParam);

        //Prepare SQL request using database connection parameters ($this->connect())

        $reqAvgSize = $this->connect()->prepare('SELECT AVG(birthsize) FROM personnage');

        //Execute request, then fetch the results
        $reqAvgSize -> execute();
        $row = $reqAvgSize -> fetch();
        //Get the value of the first index from the fetched array, then round the result with two decimals
        $roundedResult = round($row[0],2);

        return $roundedResult;
   
    }

    public function getAverageGrowth(){

        $reqAvgGrowth = $this->connect()->prepare('SELECT AVG(growth) FROM personnage');

        $reqAvgGrowth -> execute();
        $row = $reqAvgGrowth -> fetch();
        $roundedResult = round($row[0],2);

        return $roundedResult;
    }

    public function getAverageLifespan(){

        $reqAvgLifespan = $this->connect()->prepare('SELECT AVG(lifespan) FROM personnage');

        $reqAvgLifespan -> execute();
        $row = $reqAvgLifespan -> fetch();
        $roundedResult = round($row[0],2);

        return $roundedResult;
    }

    public function getSexRatio(){

        $reqSexRatio = $this->connect()->prepare('WITH Request1 AS (select count(*) as result1 from personnage where men = FALSE), Request2 AS (select count(*) as result2 from personnage)SELECT CAST(Request1.result1 AS FLOAT) / CAST(Request2.result2 AS FLOAT) * 100 as SexRatio FROM Request1, Request2');

        $reqSexRatio -> execute();
        $row = $reqSexRatio -> fetch();
        $roundedResult = round($row[0],2);

        return $roundedResult;
    }

}
?>