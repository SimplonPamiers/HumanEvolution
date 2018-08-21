<?php
declare(strict_types=1);
include 'src/DataBase.php';
use PHPUnit\Framework\TestCase;

class DataBaseTest extends TestCase{
    
    protected $db;
    public function setUp(){
        $this->db = new DataBase;
    }
    public function testDBparam(){
        return $this->db->getParam();
    }
}

?>