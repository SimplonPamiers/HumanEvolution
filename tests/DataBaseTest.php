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
        //test if connection object is not empty
        $this->assertNotEmpty($this->db->connect());
    }

    public function testGetAverageSize(){
        $this->assertEquals($this->db->getAverageSize(),49.83);
    }
}

?>