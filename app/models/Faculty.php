<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Faculty
 *
 * @author chaow.po
 */
class Faculty extends NeoEloquent{
    
    public function researchers(){
        return $this->hasMany('Researcher','HAS');
    }
    
}
