<?php
Class Personnage {

    public $first_name;


    // public function __construct(){
    //     $this->nom = "Gégé";
    // }

    public function setFirstName($firstname) {
        $this->first_name = $firstname;


    }

    public function getFirstName() {
        return $this->first_name;
    }

    // public function getNom() {
    //     return $this->nom;
    // }
}
?>