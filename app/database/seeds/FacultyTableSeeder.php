<?php

class FacultyTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Faculty::create([
                    'name' => 'คณะเทคโนโลยีสารสนเทศและการสื่อสาร',
                    'description' =>'คณะเทคโนโลยีสารสนเทศและการสื่อสาร'
                ]);
                Faculty::create([
                    'name' => 'คณะวิทยาศาสตร์',
                    'description' =>'คณะวิทยาศาสตร์'
                ]);
                Faculty::create([
                    'name' => 'คณะแพทยศาสตร์',
                    'description' =>'คณะแพทยศาสตร์'
                ]);
	}

}
