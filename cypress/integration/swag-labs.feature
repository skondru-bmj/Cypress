Feature: SwagLabs shopping as a secret user
    Scenario: Login into SwagLabs
        Given I visit SwagLabs
        When I login as a secret user
        Then I should see Products

    Scenario: Sort,Add,Remove products and checkout from the cart
         Given I sort the products by Price high to low
         And Add the two cheapest products to my basket 
         When I Open the basket
         And Remove the cheapest product from my basket and Checkout
         Then I should Finish on the page where you need to enter your name and postal code


# 1. Login to https://www.saucedemo.com/ using the "standard_user" account
# 2. Sort the products by Price (high to low)
# 3. Add the two cheapest products to your basket
# 4. Open the basket
# 5. Remove the cheapest product from your basket
# 6. Checkout
# 7. Finish on the page where you need to enter your name and postal code
        