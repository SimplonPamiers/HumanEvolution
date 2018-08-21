<?php
declare(strict_types=1);
include 'src/Personnage.php';
use PHPUnit\Framework\TestCase;


class PersonnageTest extends TestCase {
    // protected $perso;

    // public function setUp() {
    //     $this->perso = new Personnage();
    // }

    // public function getNom(){
    //     $this->assertEquals("Gégé",$this->nom);  
    // }

    protected $user;

    public function setUp(){

        $this->user = new Personnage;

    }


    public function testThatWeCanGetFirstName()
    {


    $this->user-> setFirstName('Billy');

    $this -> assertEquals ($this->user->getFirstName(),'Billy');
    }


}