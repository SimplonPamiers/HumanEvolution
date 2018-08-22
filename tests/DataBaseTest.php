<?php
declare(strict_types=1);
include 'src/DataBase.php';
use PHPUnit\Framework\TestCase;

class DataBaseTest extends TestCase{
    
    private $db;
    public function setUp(){
        $this->db = new DataBase;
    }

    public function testThatWeCanConnectToDatabase(){

        $this->assertEquals($this->db->connect(),'connection success');
        
    }

    public function testGetAverageSize(){
        $this->assertEquals($this->db->getAverageSize(),'5');
    }
}

?>