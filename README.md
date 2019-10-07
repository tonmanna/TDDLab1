#TDD—> :: Test driven development.
Before Start this class
Seven Database Song -> 
Video Conference in Real Life

#Kata Programming 
  - Every Day -> 
  - Solve simple problem.
  - http://checkio.org
  - ตั้งเงื่อนไขความยาก ในการใช้งาน
  - Roman Number
  - Code have correct 90 % is not helping you to understand the code
  - Legacy Code is code not have any test.
     - When you reach at complicate code. Almost solution should will be rewrite.
     - Coverage 100%
     - 10 - 20 Person without test is not possible to work without test.

#TDD -> Make It Failed -> Code Less Code Pass -> Refactor 
    (Refactor : Improve internal structor /  Same behaviour.)
    Failed != Error ( Failed it meaning about test result )
     -  Name of test -> “ is must have meaning “
     -  Code = How?
    Test  = What?  == Document have ability to execute.

#During Development.
 - When you write code -> Your are the Engineer ( Fast as you can)
 - When you refactor -> try to change your mind used Artis skill  ( Name variable / Performance )

#Test Type
 - Integration Test. You must be serious about Job. It's take long time.But it make your confidence.
 - Unit Test -> You can create many test.

#Test can be green but if green on first time should be remove test case it already work. (P' Jua)
#Test can be reused whenever you don't used code anymore you should keep that test( P' Jua)
#Code is over test we remove code  or write new test add 

If you follow job from other people
  -> We know the reason of function(code)
  -> We confidence to change code.
  
#Article TDD by P'Jua  
  https://medium.com/odds-team/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C-tdd-6fcb2c8ae5aa
Red is decresed debug TIME
Green is make confidence
MP(Magic Power) is can incresed when you create test.

#Debug can't Estimate Time.
#Follow Test-> from other people
   - Colaboration 

#Pair Programming
- Driver(should be junior) Navigator(wait for driver)
   - Senior -> Guide Junior
   - Drivers -> Depends on Senario
   - Transfer Knownledge
   - Improve Skill
   - Experence  -> Make confidence
   ระวังโดนสิง ถ้า ให้ Junior เป็น Drivers.
- Ping-Pong

#Mock Programming -is morethan 2 person 
  - Projector
  - Should not create complicate code.

#Hide ALL
CMD -> J -> B
Navbar
CMD -> Opt -> Left -> Right

#TDD -> Last Samurai -> P'Jua Experience
- Team should Capture What(Test) from Product Owner
- Allow Whoever can change code in our production code.
- If you want to change friend test code ask authority first.
   - sometime problem / feature depend on test.

#Working Effectily with Legacy Code (Book)
-> P' Jua call lucky if production code is working without test.
  When got incedent found should write test Code
    - Refactor to modular - > Function -> (Code Not support to test) -> Compilcate.

#CodeSmells
https://en.wikipedia.org/wiki/Code_smell
 - AnitPattern 
 - Long Method
    - Long ---- depends on language 7 - 10 Line
 - Magic Number
 - Duplicat Code
 - Data Clumbs
    - Long Parameter (from,end) => (period)
 - Comment
    - Should not explain code in comment. Because sometime comment wrong.
 - Commented Code
 - Lazy Class
    - Combine responsablity in single class.
 - Dead Code
    - No one call 
 - Feature Envy
    - Access Data from other Class. พนักงาน เซเว่น ขอกระเป๋าตัง คุณว่าพนักงาน เซเว่นควรทำอย่างไร GET paid 250;
 - Primitive Obsession
    - Basic type(float, string , int) transform => { returnNumber : 200 , message : "HTTPS_LOAD_SUCCESS"}

#Refactoring Move
 - Extract Method
 - Extract Field
 - Extract Class
 - Extract Method
 - Extract Variable
 - Long Parameter List
 - Move Method
 - Null Checks
 - Rename
 - Save Delete 
    P'Jua let us see how to used dev tools to refactoring code.
